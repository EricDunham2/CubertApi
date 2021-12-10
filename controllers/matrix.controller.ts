import { LedMatrix, LedMatrixInstance, Color, MappedGlyph } from 'rpi-led-matrix';
import { FontInstance } from 'rpi-led-matrix/dist/types';
import { matrixOptions, runtimeOptions } from '../common/matrix.config';
import { MatrixOptions, RuntimeOptions } from "rpi-led-matrix";
import { Graident, isGradient, isMappedText, MappedText } from '../common/types';

declare type SyncHook = (this: LedMatrixInstance, matrix: LedMatrixInstance, dt: number, t: number) => any;

export class MatrixController {
    private static instance: MatrixController;
    private matrix: LedMatrixInstance;
    private saveState?: Graident | MappedText;
    wait = (t: number) => new Promise(ok => setTimeout(ok, t));

    constructor() {
        this.matrix = new LedMatrix(matrixOptions, runtimeOptions);
    }

    public static getInstance(): MatrixController {
        if (!MatrixController.instance) {
            MatrixController.instance = new MatrixController();
        }

        return MatrixController.instance;
    }

    updateMatrixSettings(matrixOptions: MatrixOptions, runtimeOptions: RuntimeOptions) {
        console.log(`Updating the matrix settings`);

        this.matrix = new LedMatrix(matrixOptions, runtimeOptions);
    }

    drawBuffer(buffer: Array<number>) {
        console.log(`Drawing buffer`);
        (async () => {
            try {
                this.matrix.drawBuffer(Buffer.from(buffer));
                this.matrix.sync();
                await this.wait(Infinity);
            } catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        })();
    }

    drawBuffers(buffers: Array<Array<number>>, interval: number, loop: boolean) {
        let step: number = 0;

        (async () => {
            try {
                this.matrix.afterSync(() => {
                    this.matrix.drawBuffer(Buffer.from(buffers[step]));
                    step++;

                    if (loop && step === buffers.length) {
                        buffers.reverse();
                        step = 0;
                    }
                });

                this.matrix.sync();
                await this.wait(interval);
            } catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        })();
    }

    drawInfiniteAnimation(payload: any) {
        (async () => {
            try {
                let callback = payload["fn"];
                let seed = payload["params"];

                this.matrix.afterSync(() => {
                    let buffer: Array<number> = callback(seed)

                    this.matrix.drawBuffer(Buffer.from(buffer));
                });

                this.matrix.sync();

                await this.wait(50);
            } catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        })();
    }

    drawText(message: MappedGlyph[]) {
        console.log(`Drawing text`);

        (async () => {
            message.map(glyph => {
                this.matrix.drawText(glyph.char, glyph.x, glyph.y);
            });

            this.matrix.sync();
            await this.wait(200);
        })();
    }

    afterSync(hook: SyncHook) {
        
    }

    sync() {
        this.matrix.sync();
    }

    clear() {
        this.matrix.clear();
    }

    setBrightness(val: number) {
        this.matrix.brightness(val);
    }

    setFont(font: FontInstance) {
        this.matrix.font(font);
    }

    setForeground(color: Color | number) {
        this.matrix.fgColor(color)
    }

    setBackground(color: Color | number) {
        this.matrix.bgColor(color)
    }

    getWidth() {
        return this.matrix.width();
    }

    getHeight() {
        return this.matrix.height();
    }

    getSaveState() {
        return this.saveState;
    }

    setSaveState(data: Graident | MappedText) {
        this.saveState = data;
    }

    loadSaveState() {
        if (isGradient(this.saveState)) {
            let cube: Graident = this.saveState;

            if (cube.interval) {
                this.drawBuffers(cube.buffer as Array<Array<number>>, cube.interval, cube.loop as boolean);
            } else {
                this.drawBuffer(cube.buffer as Array<number>);
            }
        } else if (isMappedText(this.saveState)) {
            this.setBackground(this.saveState.background);
            this.setForeground(this.saveState.foreground);

            this.drawText(this.saveState.text);
        }
    }
}