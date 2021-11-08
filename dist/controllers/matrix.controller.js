"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixController = void 0;
const rpi_led_matrix_1 = require("rpi-led-matrix");
const matrix_config_1 = require("../common/matrix.config");
const types_1 = require("../common/types");
class MatrixController {
    constructor() {
        this.wait = (t) => new Promise(ok => setTimeout(ok, t));
        this.matrix = new rpi_led_matrix_1.LedMatrix(matrix_config_1.matrixOptions, matrix_config_1.runtimeOptions);
    }
    static getInstance() {
        if (!MatrixController.instance) {
            MatrixController.instance = new MatrixController();
        }
        return MatrixController.instance;
    }
    updateMatrixSettings(matrixOptions, runtimeOptions) {
        console.log(`Updating the matrix settings`);
        this.matrix = new rpi_led_matrix_1.LedMatrix(matrixOptions, runtimeOptions);
    }
    drawBuffer(buffer) {
        console.log(`Drawing buffer`);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                this.matrix.afterSync(() => {
                    this.matrix.drawBuffer(Buffer.from(buffer));
                });
                this.matrix.sync();
                yield this.wait(Infinity);
            }
            catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        }));
    }
    drawBuffers(buffers, interval, loop) {
        let step = 0;
        (() => __awaiter(this, void 0, void 0, function* () {
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
                yield this.wait(interval);
            }
            catch (error) {
                console.log(`${__filename} caught: `, error);
            }
        }));
    }
    drawText(message) {
        console.log(`Drawing text`);
        (() => __awaiter(this, void 0, void 0, function* () {
            message.map(glyph => {
                this.matrix.drawText(glyph.char, glyph.x, glyph.y);
            });
            yield this.wait(200);
        }));
    }
    afterSync(hook) {
    }
    sync() {
        this.matrix.sync();
    }
    clear() {
        this.matrix.clear();
    }
    setBrightness(val) {
        this.matrix.brightness(val);
    }
    setFont(font) {
        this.matrix.font(font);
    }
    setForeground(color) {
        this.matrix.fgColor(color);
    }
    setBackground(color) {
        this.matrix.bgColor(color);
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
    setSaveState(data) {
        this.saveState = data;
    }
    loadSaveState() {
        if ((0, types_1.isGradient)(this.saveState)) {
            let cube = this.saveState;
            if (cube.interval) {
                this.drawBuffers(cube.buffer, cube.interval, cube.loop);
            }
            else {
                this.drawBuffer(cube.buffer);
            }
        }
        else if ((0, types_1.isMappedText)(this.saveState)) {
            this.setBackground(this.saveState.background);
            this.setForeground(this.saveState.foreground);
            this.drawText(this.saveState.text);
        }
    }
}
exports.MatrixController = MatrixController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9tYXRyaXguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Y7QUFFbEYsMkRBQXdFO0FBRXhFLDJDQUFpRjtBQUlqRixNQUFhLGdCQUFnQjtJQU16QjtRQUZBLFNBQUksR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDBCQUFTLENBQUMsNkJBQWEsRUFBRSw4QkFBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUN0RDtRQUVELE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxhQUE0QixFQUFFLGNBQThCO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVMsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFxQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUIsQ0FBQyxHQUFTLEVBQUU7WUFDUixJQUFJO2dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxD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