"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtimeOptions = exports.matrixOptions = void 0;
const rpi_led_matrix_1 = require("rpi-led-matrix");
exports.matrixOptions = Object.assign(Object.assign({}, rpi_led_matrix_1.LedMatrix.defaultMatrixOptions()), { rows: 32, cols: 32, chainLength: 2, hardwareMapping: rpi_led_matrix_1.GpioMapping.Regular, parallel: 1 });
exports.runtimeOptions = Object.assign(Object.assign({}, rpi_led_matrix_1.LedMatrix.defaultRuntimeOptions()), { gpioSlowdown: 4 });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9tYXRyaXguY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQU93QjtBQUVYLFFBQUEsYUFBYSxtQ0FDckIsMEJBQVMsQ0FBQyxvQkFBb0IsRUFBRSxLQUNuQyxJQUFJLEVBQUUsRUFBRSxFQUNSLElBQUksRUFBRSxFQUFFLEVBQ1IsV0FBVyxFQUFFLENBQUMsRUFDZCxlQUFlLEVBQUUsNEJBQVcsQ0FBQyxPQUFPLEVBQ3BDLFFBQVEsRUFBRSxDQUFDLElBS1g7QUFFVyxRQUFBLGNBQWMsbUNBQ3RCLDBCQUFTLENBQUMscUJBQXFCLEVBQUUsS0FDcEMsWUFBWSxFQUFFLENBQUMsSUFDZiJ9