import { Injectable } from '@nestjs/common';
import { IUserDTO } from '../dto/usuario.dto';
import { DatabaseService } from 'src/common/services/db.service';
import { RowDataPacket } from 'mysql2';
import userQueries from '../queries/user.queries';

@Injectable()
export class UsuarioService {

    constructor(private dbService: DatabaseService) { }

    async getAllUsers(): Promise<IUserDTO[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(userQueries.selectAll, []);
        const resultUsers = resultQuery.map((rs: RowDataPacket) => {
            return {
                id: rs['usuario_id'],
                name: rs['nombre'],
                lastName: rs['apellido'],
                dni: rs['dni'],
                password: rs['contrasenia'],
                email: rs['email'],
                rolId: rs['rolId'],
                urlImage: rs['url_image']
            };
        });
        return resultUsers;
    };
}
