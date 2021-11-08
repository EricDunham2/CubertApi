import { InterpolationMode } from "chroma-js";
import { MappedGlyph } from "rpi-led-matrix";

export interface MappedText {
    foreground: number;
    background: number;
    text: MappedGlyph[];
}

export function isMappedText(obj: any): obj is MappedText {
    return obj.text !== undefined;
}

export interface Graident {
    buffer: Array<number> | Array<Array<number>>;
    interval?: number;
    loop?: boolean;
}

export function isGradient(obj: any): obj is Graident {
    return obj.text !== undefined;
}