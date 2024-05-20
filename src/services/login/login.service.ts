import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../../common/db.service';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import userQueries from '../queries/user.queries';
import { IUserDTO } from 'src/dto/usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {

    saltRounds: number = 10;

    constructor
        (
            private jwtService: JwtService,
            private dbService: DatabaseService
        ) { }

    async getAllUsers(): Promise<IUserDTO[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(userQueries.selectAll, []);
        const resultUsers = resultQuery.map((rs: RowDataPacket) => {
            return {
                id: rs['usuarioId'],
                name: rs['nombre'],
                lastName: rs['apellido'],
                dni: rs['dni'],
                password: rs['contrasenia'],
                email: rs['email'],
                rolId: rs['rolId'],
            };
        });
        return resultUsers;
    };

    async createUser(user: IUserDTO): Promise<IUserDTO> {
        const hashedPassword = await this.hashPassword(user.password);
        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
            userQueries.insert,
            [user.name, user.lastName, user.dni, hashedPassword, user.email, user.rolId]
        );

        return {
            id: resultQuery.insertId,
            name: user.name,
            lastName: user.lastName,
            // username: string;
            dni: user.dni,
            email: user.email,
            rolId: user.rolId,
        }
    }

    //Generamos hash para la contraseña
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    //Validar los datos del usuario ingresante
    async validateUser(name: string, password: string): Promise<IUserDTO | null> {
        try {
            const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(userQueries.selectByName, [name]);

            // Reviso si la contraseña que mandó el user y la guardada en la base son iguales
            const passwordsCompared = await bcrypt.compare(password, resultQuery[0]['contrasenia']);

            if (passwordsCompared) {
                return {
                    id: resultQuery[0]['id'],
                    name: resultQuery[0]['nombre'],
                    lastName: resultQuery[0]['apellido'],
                    dni: resultQuery[0]['dni'],
                    email: resultQuery[0]['email'],
                    rolId: resultQuery[0]['rolId']
                }
            }

        } catch (error) {
            console.error("Error al validar el usuario:", error);
            return null;
        }
    }

    //Cuando el usuario ya ingreso
    login(user: IUserDTO) {
        const payload = { name: user.name };
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }


}