import { MatrixController } from './matrix.controller';
import { bilinearGradient, linearGradient, blend } from "../controllers/chroma.controller";
import { Color, InterpolationMode } from 'chroma-js';
import { Font, HorizontalAlignment, LayoutUtils, MappedGlyph, VerticalAlignment } from 'rpi-led-matrix';

export class CubeController {
    matrix: MatrixController;

    constructor() {
        this.matrix = new MatrixController();
    }

    transition(topColors: Array<string>, bottomColors: Array<string>, mode: InterpolationMode, interval: number, steps: number, loop: boolean) {

        let buffers: Array<Array<number>> = [];
        let step: number = 0;

        let blend1 = blend(topColors[0], bottomColors[0], this.matrix.getWidth(), mode);
        let blend2 = blend(topColors[1], bottomColors[1], this.matrix.getWidth(), mode);
        let blend3 = blend(topColors[2], bottomColors[2], this.matrix.getWidth(), mode);
        let blend4 = blend(topColors[3], bottomColors[3], this.matrix.getWidth(), mode);

        while (step < steps) {
            let colors: Array<Color> = [];

            colors.push(blend1(step));
            colors.push(blend2(step));
            colors.push(blend3(step));
            colors.push(blend4(step));

            buffers.push(this.cube(colors, mode));

            step++;
        }

        this.matrix.drawBuffers(buffers, interval, loop);
    }

    cube(colors: Array<(string | Color)>, mode: InterpolationMode) {
        let buf: Array<number> = [];
        buf = buf.concat.apply(bilinearGradient(colors, mode));

        let clrCpy = colors.slice(0, colors.length);
        let start = String(colors.pop());

        colors.reverse().push(start);
        colors.reverse();

        buf = buf.concat.apply(bilinearGradient(colors, mode));
        buf = buf.concat.apply(linearGradient(clrCpy[0], clrCpy[1], this.matrix.getWidth(), mode));
        buf = buf.concat.apply(linearGradient(clrCpy[1], clrCpy[2], this.matrix.getWidth(), mode));
        buf = buf.concat.apply(linearGradient(clrCpy[2], clrCpy[3], this.matrix.getWidth(), mode));
        buf = buf.concat.apply(linearGradient(clrCpy[3], clrCpy[0], this.matrix.getWidth(), mode));

        return buf
    }

    text(message: string, background: number, foreground: number) {
        const font = new Font('helvR12', `${process.cwd()}/fonts/helvR12.bdf`);
        this.matrix.setFont(font);

        const lines = LayoutUtils.textToLines(font, this.matrix.getWidth(), message);

        this.matrix.setForeground(foreground);
        this.matrix.setBackground(background);

        for (const alignmentH of [HorizontalAlignment.Left, HorizontalAlignment.Center, HorizontalAlignment.Right]) {
            for (const alignmentV of [VerticalAlignment.Top, VerticalAlignment.Middle, VerticalAlignment.Bottom]) {
                let glyphs: MappedGlyph[] = LayoutUtils.linesToMappedGlyphs(lines, font.height(), this.matrix.getWidth(), this.matrix.getHeight(), alignmentH, alignmentV)
                this.matrix.drawText(glyphs);
                this.matrix.sync();
            }
        }
    }
}
