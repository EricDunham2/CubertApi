"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeController = void 0;
const matrix_controller_1 = require("./matrix.controller");
const chroma_controller_1 = require("../controllers/chroma.controller");
const rpi_led_matrix_1 = require("rpi-led-matrix");
const cube_service_1 = require("../service/cube.service");
class CubeController {
    constructor() {
        this.matrix = matrix_controller_1.MatrixController.getInstance();
        this.cubeService = new cube_service_1.CubeService();
        this.powerState = true;
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
            buffers.push((0, chroma_controller_1.cubeGradient)(colors, mode, this.matrix.getWidth()));
            step++;
        }
        let cube = {
            buffer: buffers,
            interval: interval,
            loop: loop
        };
        this.matrix.setSaveState(cube);
        this.matrix.drawBuffers(buffers, interval, loop);
    }
    drawCube(colors, mode) {
        let buf = (0, chroma_controller_1.cubeGradient)(colors, mode, this.matrix.getWidth());
        let cube = {
            buffer: buf,
        };
        this.matrix.setSaveState(cube);
        this.matrix.drawBuffer(buf);
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
                let save = {
                    text: glyphs,
                    foreground: foreground,
                    background: background,
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
        }
        else {
            this.matrix.loadSaveState();
            return true;
        }
    }
    getCube(cubeId) {
        //Case to cubedto
        return this.cubeService.getCube(cubeId);
    }
    getAllCubes() {
        //Case to Array of cubedto
        return this.cubeService.getAllCubes();
    }
    setCube(userId, name, data, cubeId, description) {
        let cube = {
            name: name,
            userId: userId,
            data: data
        };
        description ? cube.description = description : null;
        cubeId ? cube.id = cubeId : null;
        if (cube.id) {
            this.cubeService.updateCube(cube);
        }
        else {
            this.cubeService.createCube(cube);
        }
    }
    deleteCube(cubeId) {
        this.cubeService.deleteCube(cubeId);
    }
}
exports.CubeController = CubeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ViZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvY3ViZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF1RDtBQUN2RCx3RUFBdUU7QUFFdkUsbURBQXdHO0FBR3hHLDBEQUFzRDtBQUd0RCxNQUFhLGNBQWM7SUFLdkI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLG9DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUF3QixFQUFFLFlBQTJCLEVBQUUsSUFBdUIsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxJQUFhO1FBQ3JJLElBQUksT0FBTyxHQUF5QixFQUFFLENBQUM7UUFDdkMsSUFBSSxJQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLElBQUksTUFBTSxHQUFHLElBQUEseUJBQUssRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxNQUFNLEdBQUcsSUFBQSx5QkFBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLE1BQU0sR0FBRyxJQUFBLHlCQUFLLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFD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