import { MappedText } from "../common/types";

export interface CubeDto {
    id?: number;
    description?: string;
    userId: number;
    name: string;
    data: Array<number> | Array<Array<number>> | MappedText
}