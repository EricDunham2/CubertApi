import { LedMatrix, LedMatrixInstance, Color, MappedGlyph } from 'rpi-led-matrix';
import { FontInstance } from 'rpi-led-matrix/dist/types';
import { matrixOptions, runtimeOptions } from '../common/matrix.config';

declare type SyncHook = (this: LedMatrixInstance, matrix: LedMatrixInstance, dt: number, t: number) => any;

export class MatrixController {
    private matrix: LedMatrixInstance;
    wait: (t: number) => Promise<unknown>;

    constructor() {
        this.matrix = new LedMatrix(matrixOptions, runtimeOptions);
        this.wait = (t: number) => new Promise(ok => setTimeout(ok, t));
    }

    drawBuffer(buffer: Array<number>) {
        (async () => {
            try {
                this.matrix.afterSync(() => {
                    this.matrix.drawBuffer(Buffer.from(buffer));
                });

                this.matrix.sync();

                await this.wait(Infinity);
            } catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        });
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
        });
    }

    drawText(message: MappedGlyph[]) {
        (async () => {
            message.map(glyph => {
                this.matrix.drawText(glyph.char, glyph.x, glyph.y);
            });

            await this.wait(200);
        });
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
}