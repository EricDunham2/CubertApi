import { MatrixController } from './matrix.controller';
import { blend, cubeGradient } from "../controllers/chroma.controller";
import { Color, InterpolationMode } from 'chroma-js';
import { Font, HorizontalAlignment, LayoutUtils, MappedGlyph, VerticalAlignment } from 'rpi-led-matrix';
import { Graident, MappedText } from '../common/types';
import { CubeDto } from '../dto/cube.dto';
import { CubeService } from '../service/cube.service';
import { FindCursor, Document } from 'mongodb';

export class CubeController {
    private matrix: MatrixController;
    private cubeService: CubeService;
    private powerState: boolean;

    constructor() {
        this.matrix = MatrixController.getInstance();
        this.cubeService = new CubeService();
        this.powerState = true;
    }

    transition(topColors: Array<string>, bottomColors: Array<string>, mode: InterpolationMode, interval: number, steps: number, loop: boolean) {
        let buffers: Array<Array<number>> = [];
        let step: number = 0;


        
        if (topColors.length !== 4 || bottomColors.length !== 4) {
            throw new Error("Top and Bottom need 4 colors");
        }

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

            buffers.push(cubeGradient(colors, mode, this.matrix.getWidth()));

            step++;
        }

        let cube: Graident = {
            buffer: buffers,
            interval: interval,
            loop: loop
        }

        this.matrix.setSaveState(cube);
        this.matrix.drawBuffers(buffers, interval, loop);
    }

    drawCube(colors: Array<(string | Color)>, mode: InterpolationMode) {
        let buf: Array<number> = cubeGradient(colors, mode, this.matrix.getWidth());
        let cube: Graident = {
            buffer: buf,
        };

        this.matrix.setSaveState(cube);
        this.matrix.drawBuffer(buf);
    }

    text(message: string, background: number, foreground: number) {
        const font = new Font('helvR12', `${process.cwd()}/fonts/helvR12.bdf`);
        this.matrix.setFont(font);

        const lines = LayoutUtils.textToLines(font, this.matrix.getWidth(), message);

        this.matrix.setForeground(foreground);
        this.matrix.setBackground(background);

        for (const alignmentH of [HorizontalAlignment.Left, HorizontalAlignment.Center, HorizontalAlignment.Right]) {
            for (const alignmentV of [VerticalAlignment.Top, VerticalAlignment.Middle, VerticalAlignment.Bottom]) {
                let glyphs: MappedGlyph[] = LayoutUtils.linesToMappedGlyphs(lines, font.height(), this.matrix.getWidth(), this.matrix.getHeight(), alignmentH, alignmentV);
                
                let save: MappedText = {
                    text: glyphs,
                    foreground: foreground,
                    background:background,
                };

                this.matrix.setSaveState(save);

                this.matrix.drawText(glyphs);
                this.matrix.sync();
            }
        }
    }

    power() {
        this.powerState = !this.powerState;

        if (!this.powerState) {
            this.matrix.clear();
        } else {
            this.matrix.loadSaveState();
            return true;
        }
    }

    getCube(cubeId: number): (FindCursor<Document> | null) {
        //Case to cubedto
        return this.cubeService.getCube(cubeId);
    }

    getAllCubes(): (FindCursor<Document> | null) {
        //Case to Array of cubedto
        return this.cubeService.getAllCubes();
    }

    setCube(userId: number, name: string, data: (Array<number> | Array<Array<number>> | MappedText), cubeId?: number, description?: string) {
        let cube: CubeDto = {
            name: name,
            userId: userId,
            data: data
        }

        description ? cube.description = description : null;
        cubeId ? cube.id = cubeId : null;

        if (cube.id) { 
            this.cubeService.updateCube(cube);
        } else {
            this.cubeService.createCube(cube)
        }
    }

    deleteCube(cubeId: number) {
        this.cubeService.deleteCube(cubeId);
    }
}
