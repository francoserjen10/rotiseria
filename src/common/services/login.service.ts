import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from './db.service';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import userQueries from '../../usuario/queries/user.queries';
import { IUserDTO } from 'src/usuario/dto/usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {

    saltRounds: number = 10;
    
    constructor
    (
        private jwtService: JwtService,
        private dbService: DatabaseService
    ) { }
    
    //Generamos hash para la contraseña
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

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


    //Validar los datos del usuario ingresante
    async validateUser(email: string, password: string): Promise<IUserDTO | null> {
        try {
            const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(userQueries.selectByEmail, [email]);

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
    //Cambiarle el nombre 
    //Ponerle todo lo que sea perfilamiento del usuario en el token (Nada de lo privado) y tambien el id del usuario
    login(user: IUserDTO) {
        const payload = { id: user.id ,name: user.name, lastName: user.lastName, dni: user.dni, email: user.email, rol: user.rolId };
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }


}