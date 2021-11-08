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

export function cubeGradient(colors: Array<(string | Color)>, mode: InterpolationMode, width: number) {
    let buf: Array<number> = [];
    buf = buf.concat.apply(bilinearGradient(colors, mode));

    let clrCpy = colors.slice(0, colors.length);
    let start = String(colors.pop());

    colors.reverse().push(start);
    colors.reverse();

    buf = buf.concat.apply(bilinearGradient(colors, mode));
    buf = buf.concat.apply(linearGradient(clrCpy[0], clrCpy[1], width, mode));
    buf = buf.concat.apply(linearGradient(clrCpy[1], clrCpy[2], width, mode));
    buf = buf.concat.apply(linearGradient(clrCpy[2], clrCpy[3], width, mode));
    buf = buf.concat.apply(linearGradient(clrCpy[3], clrCpy[0], width, mode));

    return buf;
}

export function blend(color1: (string | Color), color2: (string | Color), steps: number, mode: InterpolationMode) {
    return chroma.scale([color1, color2]).domain([0, steps]).mode(mode);
}

