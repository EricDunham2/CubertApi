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
class MatrixController {
    constructor() {
        this.matrix = new rpi_led_matrix_1.LedMatrix(matrix_config_1.matrixOptions, matrix_config_1.runtimeOptions);
        this.wait = (t) => new Promise(ok => setTimeout(ok, t));
    }
    drawBuffer(buffer) {
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
}
exports.MatrixController = MatrixController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9tYXRyaXguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Y7QUFFbEYsMkRBQXdFO0FBSXhFLE1BQWEsZ0JBQWdCO0lBSXpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDBCQUFTLENBQUMsNkJBQWEsRUFBRSw4QkFBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFxQjtRQUM1QixDQUFDLEdBQVMsRUFBRTtZQUNSLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRW5CLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQTZCLEVBQUUsUUFBZ0IsRUFBRSxJQUFhO1FBQ3RFLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUVyQixDQUFDLEdBQVMsRUFBRTtZQUNSLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksRUFBRSxDQUFDO29CQUVQLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNqQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xCLElBQUksR0FBRyxDQUFDLENBQUM7cUJBQ1o7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBc0I7UUFDM0IsQ0FBQyxHQUFTLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQWM7SUFFeEIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFrQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQXFCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBcUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUNKO0FBN0ZELDRDQTZGQyJ9