// @filename: maths.ts
import chroma, { InterpolationMode, Color } from "chroma-js";
import { matrixOptions } from '../common/matrix.config';

export function linearGradient(color1: (string | Color), color2: (string | Color), steps: number, mode: InterpolationMode) {
    let fn = chroma.scale([color1, color2]).domain([0, steps]).mode(mode);
    let buf = [];

    for (var row = 0; row < matrixOptions.rows; row++) {
        buf[row] = [...Array(matrixOptions.rows).keys()];
    }

    buf.forEach((row, rowIdx) => {
        let color: Color = fn(rowIdx);
        buf[rowIdx] = row.map(val => {
            return color.hex();
        });
    });

    return buf;
}

export function bilinearGradient(colors: Array<(string | Color)>, mode: InterpolationMode) {
    var scale1 = blend(colors[0], colors[1], matrixOptions.cols , mode)
    var scale2 = blend(colors[2], colors[3], matrixOptions.cols, mode)

    var arrBuf = [];

    for (var row = 0; row < matrixOptions.cols; row++) {
        arrBuf[row] = [...Array(matrixOptions.rows).keys()];
    }

    arrBuf.forEach((row, rowIdx) => {
        var scale3 = blend(scale1(rowIdx).hex(), scale2(rowIdx).hex(), matrixOptions.rows, mode)
        arrBuf[rowIdx] = row.map(val => {
            return scale3(val).hex();
        });
    });

    return arrBuf
}

export function blend(color1: (string | Color), color2: (string | Color), steps: number, mode: InterpolationMode) {
    return chroma.scale([color1, color2]).domain([0, steps]).mode(mode);
}

