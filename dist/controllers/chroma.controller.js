"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blend = exports.bilinearGradient = exports.linearGradient = void 0;
// @filename: maths.ts
const chroma_js_1 = __importDefault(require("chroma-js"));
const matrix_config_1 = require("../common/matrix.config");
function linearGradient(color1, color2, steps, mode) {
    let fn = chroma_js_1.default.scale([color1, color2]).domain([0, steps]).mode(mode);
    let buf = [];
    for (var row = 0; row < matrix_config_1.matrixOptions.rows; row++) {
        buf[row] = [...Array(matrix_config_1.matrixOptions.rows).keys()];
    }
    buf.forEach((row, rowIdx) => {
        let color = fn(rowIdx);
        buf[rowIdx] = row.map(val => {
            return color.hex();
        });
    });
    return buf;
}
exports.linearGradient = linearGradient;
function bilinearGradient(colors, mode) {
    var scale1 = blend(colors[0], colors[1], matrix_config_1.matrixOptions.cols, mode);
    var scale2 = blend(colors[2], colors[3], matrix_config_1.matrixOptions.cols, mode);
    var arrBuf = [];
    for (var row = 0; row < matrix_config_1.matrixOptions.cols; row++) {
        arrBuf[row] = [...Array(matrix_config_1.matrixOptions.rows).keys()];
    }
    arrBuf.forEach((row, rowIdx) => {
        var scale3 = blend(scale1(rowIdx).hex(), scale2(rowIdx).hex(), matrix_config_1.matrixOptions.rows, mode);
        arrBuf[rowIdx] = row.map(val => {
            return scale3(val).hex();
        });
    });
    return arrBuf;
}
exports.bilinearGradient = bilinearGradient;
function blend(color1, color2, steps, mode) {
    return chroma_js_1.default.scale([color1, color2]).domain([0, steps]).mode(mode);
}
exports.blend = blend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21hLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9jaHJvbWEuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsMERBQTZEO0FBQzdELDJEQUF3RDtBQUV4RCxTQUFnQixjQUFjLENBQUMsTUFBd0IsRUFBRSxNQUF3QixFQUFFLEtBQWEsRUFBRSxJQUF1QjtJQUNySCxJQUFJLEVBQUUsR0FBRyxtQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN4QixJQUFJLEtBQUssR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWhCRCx3Q0FnQkM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxNQUErQixFQUFFLElBQXVCO0lBQ3JGLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLDZCQUFhLENBQUMsSUFBSSxFQUFHLElBQUksQ0FBQyxDQUFBO0lBQ25FLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLDZCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRWxFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVoQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSw2QkFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4RixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQztBQWxCRCw0Q0FrQkM7QUFFRCxTQUFnQixLQUFLLENBQUMsTUFBd0IsRUFBRSxNQUF3QixFQUFFLEtBQWEsRUFBRSxJQUF1QjtJQUM1RyxPQUFPLG1CQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFGRCxzQkFFQyJ9