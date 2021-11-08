"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsController = void 0;
const matrix_config_1 = require("../common/matrix.config");
const matrix_controller_1 = require("./matrix.controller");
class SettingsController {
    constructor() {
        this.matrix = matrix_controller_1.MatrixController.getInstance();
        this.matrixOptions = matrix_config_1.matrixOptions;
        this.runtimeOptions = matrix_config_1.runtimeOptions;
    }
    getMatrixOptions() {
        return this.matrixOptions;
    }
    setCubeSettings(opts) {
        this.matrixOptions = opts;
        this.matrix.updateMatrixSettings(this.matrixOptions, this.runtimeOptions);
    }
    getRuntimeOptions() {
        return this.runtimeOptions;
    }
    setRuntimeOptions(opts) {
        this.runtimeOptions = opts;
        this.matrix.updateMatrixSettings(this.matrixOptions, this.runtimeOptions);
    }
    getApplicationSettings() {
    }
    setApplicationSettings() {
    }
}
exports.SettingsController = SettingsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3NldHRpbmdzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQXdFO0FBQ3hFLDJEQUF1RDtBQUV2RCxNQUFhLGtCQUFrQjtJQUszQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsb0NBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyw2QkFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsOEJBQWMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBbUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFvQjtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxzQkFBc0I7SUFFdEIsQ0FBQztJQUVELHNCQUFzQjtJQUV0QixDQUFDO0NBQ0o7QUFwQ0QsZ0RBb0NDIn0=