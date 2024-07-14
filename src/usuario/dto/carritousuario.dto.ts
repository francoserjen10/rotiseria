import { IsInt } from "class-validator";

export class ICarritoDTO {
    @IsInt()
    id: number;

    @IsInt()
    usuario_id: number;
}