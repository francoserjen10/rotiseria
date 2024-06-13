import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class IUserDTO {
    @IsInt()
    @IsOptional()
    id?: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsInt()
    dni: number;

    // @IsString()
    @IsNotEmpty()
    password?: string;

    @IsEmail()
    // @IsString()
    email: string;

    @IsInt()
    rolId: number;

    @IsString()
    urlImage: string;
}