import { MatrixOptions, RuntimeOptions } from "rpi-led-matrix";
import { matrixOptions, runtimeOptions } from "../common/matrix.config";
import { MatrixController } from "./matrix.controller";

export class SettingsController {
    private matrix: MatrixController;
    private matrixOptions: MatrixOptions;
    private runtimeOptions: RuntimeOptions;

    constructor() {
        this.matrix = MatrixController.getInstance();
        this.matrixOptions = matrixOptions;
        this.runtimeOptions = runtimeOptions;
    }

    getMatrixOptions() {
        return this.matrixOptions;
    }

    setMatrixSettings(opts: MatrixOptions) {
        this.matrixOptions = opts;
        this.matrix.updateMatrixSettings(this.matrixOptions, this.runtimeOptions);
    }
    
    getRuntimeOptions() {
        return this.runtimeOptions;
    }

    setRuntimeOptions(opts: RuntimeOptions) {
        this.runtimeOptions = opts;
        this.matrix.updateMatrixSettings(this.matrixOptions, this.runtimeOptions);
    }

    getApplicationSettings() {

    }

    setApplicationSettings() {

    }
}