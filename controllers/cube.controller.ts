import { MatrixController } from './matrix.controller';
import { blend, cubeGradient } from "../controllers/chroma.controller";
import { Color, InterpolationMode } from 'chroma-js';
import { Font, HorizontalAlignment, LayoutUtils, MappedGlyph, VerticalAlignment } from 'rpi-led-matrix';
import { Graident, MappedText } from '../common/types';
import { CubeDto } from '../dto/cube.dto';
import { CubeService } from '../service/cube.service';
import { FindCursor, Document } from 'mongodb';
import { Game } from './conways.game.controller';

export class CubeController {
    private matrix: MatrixController;
    private cubeService: CubeService;
    private powerState: boolean;

    constructor() {
        this.matrix = MatrixController.getInstance();
        this.cubeService = new CubeService();
        this.powerState = true;
    }

    conway(panels: number, size?: number, forground?: number, background?: number) {

        try {
            let boardSize: number = 64; //(size) ? size : (this.matrix.getHeight() > this.matrix.getWidth()) ? this.matrix.getHeight() : this.matrix.getWidth();
            let fg: number  = (forground) ? forground : 0xFFFFFF;
            let bg: number =  (background) ? background : 0x000000;

            let cube: Array<Game> = []

            console.log("Creating the game of life")

            for (let i = 0; i < panels; i++) {
                cube.push(new Game(boardSize));
            }

            function callback(params: any): Array<number> {
                console.log(params)

                let games = params[0];
                let buf: Array<number> = [];

                games.forEach((game: Game ) => {
                    buf = buf.concat(game.step().flat());
                });

                return buf;
            }

            let payload = {
                "fn": callback,
                "params": [cube]
            }

            this.matrix.setForeground(fg);
            this.matrix.setBackground(bg);
            this.matrix.drawInfiniteAnimation(payload);
        } catch (err) {
            return {code: 500, msg: err};
        }

        return {code: 200, msg: `Conway => Board Size: ${size}}, Panels: ${panels}, Foreground: ${forground}, Background: ${background}`};
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

            buffers.push(cubeGradient(colors, mode, this.matrix.getWidth()).flat(1));

            step++;
        }

        let cube: Graident = {
            buffer: buffers,
            interval: interval,
            loop: loop
        }

        try {
            this.matrix.setSaveState(cube);
            this.matrix.drawBuffers(buffers, interval, loop);
        } catch (err) {
            return {code: 500, msg: err};
        }

        return {code:200, msg: "Trasitioning"};
    }

    drawCube(colors: Array<(string | Color)>, mode: InterpolationMode) {
        let buf: Array<number> = cubeGradient(colors, mode, this.matrix.getWidth());
        let cube: Graident = {
            buffer: buf,
        };

        try {
            this.matrix.setSaveState(cube);
            this.matrix.drawBuffer(buf.flat(1));
        } catch (err) {
            return {code: 500, msg: err}
        }

        return {code: 200, msg:  "Drawing cube"}
    }

    text(message: string, background: number, foreground: number) {
        const font = new Font('helvR12', `${process.cwd()}/fonts/helvR12.bdf`);
        this.matrix.setFont(font);

        const lines = LayoutUtils.textToLines(font, this.matrix.getWidth(), message);

        this.matrix.setForeground(foreground);
        this.matrix.setBackground(background);


        try {
            for (const alignmentH of [HorizontalAlignment.Left, HorizontalAlignment.Center, HorizontalAlignment.Right]) {
                for (const alignmentV of [VerticalAlignment.Top, VerticalAlignment.Middle, VerticalAlignment.Bottom]) {
                    let glyphs: MappedGlyph[] = LayoutUtils.linesToMappedGlyphs(lines, font.height(), this.matrix.getWidth(), this.matrix.getHeight(), alignmentH, alignmentV);

                    let save: MappedText = {
                        text: glyphs,
                        foreground: foreground,
                        background: background,
                    };

                    this.matrix.setSaveState(save);
                    this.matrix.drawText(glyphs);
                }
            }
        } catch (err) {
            return {code: 500, msg: err}
        }

        return {code: 200, msg: "Drawing Text"}
    }

    power() {
        this.powerState = !this.powerState;

        try {
            if (!this.powerState) {
                this.matrix.clear();
            } else {
                this.matrix.loadSaveState();
            }
        } catch (err) {
            return {code: 500, msg: err}
        }

        return {code: 200, msg: `Powerstate: ${this.powerState}`};
    }

    getCube(cubeId: number): (FindCursor<Document> | null) {
        //Case to cubedto
        return this.cubeService.getCube(cubeId);
    }

    getAllCubes(): (FindCursor<Document> | null) {
        //Case to Array of cubedto
        return this.cubeService.getAllCubes();
    }

    createCube(cube: CubeDto) {
        this.cubeService.createCube(cube)
    }

    updateCube(cube: CubeDto) {
        let buf: any = this.matrix.getSaveState();
        if (buf === null || buf === undefined) { return false; }

        cube.data = buf;

        this.cubeService.updateCube(cube);
    }

    deleteCube(cubeId: number) {
        this.cubeService.deleteCube(cubeId);
    }
}
