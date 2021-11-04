"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeController = void 0;
const matrix_controller_1 = require("./matrix.controller");
const chroma_controller_1 = require("../controllers/chroma.controller");
const rpi_led_matrix_1 = require("rpi-led-matrix");
class CubeController {
    constructor() {
        this.matrix = new matrix_controller_1.MatrixController();
    }
    transition(topColors, bottomColors, mode, interval, steps, loop) {
        let buffers = [];
        let step = 0;
        let blend1 = (0, chroma_controller_1.blend)(topColors[0], bottomColors[0], this.matrix.getWidth(), mode);
        let blend2 = (0, chroma_controller_1.blend)(topColors[1], bottomColors[1], this.matrix.getWidth(), mode);
        let blend3 = (0, chroma_controller_1.blend)(topColors[2], bottomColors[2], this.matrix.getWidth(), mode);
        let blend4 = (0, chroma_controller_1.blend)(topColors[3], bottomColors[3], this.matrix.getWidth(), mode);
        while (step < steps) {
            let colors = [];
            colors.push(blend1(step));
            colors.push(blend2(step));
            colors.push(blend3(step));
            colors.push(blend4(step));
            buffers.push(this.cube(colors, mode));
            step++;
        }
        this.matrix.drawBuffers(buffers, interval, loop);
    }
    cube(colors, mode) {
        let buf = [];
        buf = buf.concat.apply((0, chroma_controller_1.bilinearGradient)(colors, mode));
        let clrCpy = colors.slice(0, colors.length);
        let start = String(colors.pop());
        colors.reverse().push(start);
        colors.reverse();
        buf = buf.concat.apply((0, chroma_controller_1.bilinearGradient)(colors, mode));
        buf = buf.concat.apply((0, chroma_controller_1.linearGradient)(clrCpy[0], clrCpy[1], this.matrix.getWidth(), mode));
        buf = buf.concat.apply((0, chroma_controller_1.linearGradient)(clrCpy[1], clrCpy[2], this.matrix.getWidth(), mode));
        buf = buf.concat.apply((0, chroma_controller_1.linearGradient)(clrCpy[2], clrCpy[3], this.matrix.getWidth(), mode));
        buf = buf.concat.apply((0, chroma_controller_1.linearGradient)(clrCpy[3], clrCpy[0], this.matrix.getWidth(), mode));
        return buf;
    }
    text(message, background, foreground) {
        const font = new rpi_led_matrix_1.Font('helvR12', `${process.cwd()}/fonts/helvR12.bdf`);
        this.matrix.setFont(font);
        const lines = rpi_led_matrix_1.LayoutUtils.textToLines(font, this.matrix.getWidth(), message);
        this.matrix.setForeground(foreground);
        this.matrix.setBackground(background);
        for (const alignmentH of [rpi_led_matrix_1.HorizontalAlignment.Left, rpi_led_matrix_1.HorizontalAlignment.Center, rpi_led_matrix_1.HorizontalAlignment.Right]) {
            for (const alignmentV of [rpi_led_matrix_1.VerticalAlignment.Top, rpi_led_matrix_1.VerticalAlignment.Middle, rpi_led_matrix_1.VerticalAlignment.Bottom]) {
                let glyphs = rpi_led_matrix_1.LayoutUtils.linesToMappedGlyphs(lines, font.height(), this.matrix.getWidth(), this.matrix.getHeight(), alignmentH, alignmentV);
                this.matrix.drawText(glyphs);
                this.matrix.sync();
            }
        }
    }
}
exports.CubeController = CubeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ViZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvY3ViZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF1RDtBQUN2RCx3RUFBMkY7QUFFM0YsbURBQXdHO0FBRXhHLE1BQWEsY0FBYztJQUd2QjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVLENBQUMsU0FBd0IsRUFBRSxZQUEyQixFQUFFLElBQXVCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsSUFBYTtRQUVySSxJQUFJLE9BQU8sR0FBeUIsRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUVyQixJQUFJLE1BQU0sR0FBRyxJQUFBLHlCQUFLLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksTUFBTSxHQUFHLElBQUEseUJBQUssRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxNQUFNLEdBQUcsSUFBQSx5QkFBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLE1BQU0sR0FBRyxJQUFBLHlCQUFLLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFB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