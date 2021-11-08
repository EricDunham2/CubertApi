"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtimeOptions = exports.matrixOptions = void 0;
const rpi_led_matrix_1 = require("rpi-led-matrix");
exports.matrixOptions = {
    brightness: 100,
    chainLength: 1,
    cols: 32,
    disableHardwarePulsing: false,
    hardwareMapping: rpi_led_matrix_1.GpioMapping.Regular,
    inverseColors: false,
    ledRgbSequence: 'RGB',
    multiplexing: rpi_led_matrix_1.MuxType.Direct,
    parallel: 1,
    pixelMapperConfig: '',
    pwmBits: 11,
    pwmDitherBits: 0,
    pwmLsbNanoseconds: 130,
    rowAddressType: rpi_led_matrix_1.RowAddressType.Direct,
    rows: 32,
    scanMode: rpi_led_matrix_1.ScanMode.Progressive,
    showRefreshRate: false,
};
exports.runtimeOptions = {
    daemon: rpi_led_matrix_1.RuntimeFlag.Off,
    doGpioInit: true,
    dropPrivileges: rpi_led_matrix_1.RuntimeFlag.On,
    gpioSlowdown: 0
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9tYXRyaXguY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQVF3QjtBQUVYLFFBQUEsYUFBYSxHQUFrQjtJQUMxQyxVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxFQUFFLEVBQUU7SUFDUixzQkFBc0IsRUFBRSxLQUFLO0lBQzdCLGVBQWUsRUFBRSw0QkFBVyxDQUFDLE9BQU87SUFDcEMsYUFBYSxFQUFFLEtBQUs7SUFDcEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsWUFBWSxFQUFFLHdCQUFPLENBQUMsTUFBTTtJQUM1QixRQUFRLEVBQUUsQ0FBQztJQUNYLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsT0FBTyxFQUFFLEVBQUU7SUFDWCxhQUFhLEVBQUUsQ0FBQztJQUNoQixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLGNBQWMsRUFBRSwrQkFBYyxDQUFDLE1BQU07SUFDckMsSUFBSSxFQUFFLEVBQUU7SUFDUixRQUFRLEVBQUUseUJBQVEsQ0FBQyxXQUFXO0lBQzlCLGVBQWUsRUFBRSxLQUFLO0NBQ3ZCLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBbUI7SUFDN0MsTUFBTSxFQUFFLDRCQUFXLENBQUMsR0FBRztJQUN2QixVQUFVLEVBQUUsSUFBSTtJQUNoQixjQUFjLEVBQUUsNEJBQVcsQ0FBQyxFQUFFO0lBQzlCLFlBQVksRUFBRSxDQUFDO0NBQ2YsQ0FBQyJ9