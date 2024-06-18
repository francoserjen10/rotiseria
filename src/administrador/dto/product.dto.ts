import { IsInt, IsOptional, IsString } from "class-validator";

export class IProductDTO {
    @IsInt()
    @IsOptional()
    id?: number;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsInt()
    price: number;

    @IsInt()
    categoryId: string;
}
