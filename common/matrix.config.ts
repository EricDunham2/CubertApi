import {
  GpioMapping,
  MatrixOptions,
  MuxType,
  RowAddressType,
  RuntimeFlag,
  RuntimeOptions,
  ScanMode,
} from 'rpi-led-matrix';

export const matrixOptions: MatrixOptions = {
  brightness: 50,
  chainLength: 1,
  cols: 64,
  disableHardwarePulsing: false,
  hardwareMapping: GpioMapping.Regular,
  inverseColors: false,
  ledRgbSequence: 'RGB' ,
  multiplexing: MuxType.Direct,
  parallel: 1,
  pixelMapperConfig: '',
  pwmBits: 7,
  pwmDitherBits: 0,
  pwmLsbNanoseconds: 130,
  rowAddressType: RowAddressType.Direct,
  rows: 64,
  scanMode: ScanMode.Progressive,
  showRefreshRate: false,
};

export const runtimeOptions: RuntimeOptions = {
 daemon: RuntimeFlag.Off,
 doGpioInit: true,
 dropPrivileges: RuntimeFlag.On,
 gpioSlowdown: 0 
};
