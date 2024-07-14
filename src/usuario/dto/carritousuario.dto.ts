import { IsInt } from "class-validator";

export class ICarritoDTO {
    @IsInt()
    id: number;

    @IsInt()
    usuarioId: number;
}