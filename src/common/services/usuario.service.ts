import { Injectable } from '@nestjs/common';
import { IUserDTO } from 'src/usuario/dto/usuario.dto';
import { DbService } from './db.service';
import { RowDataPacket } from 'mysql2';
import userQueries from 'src/common/queries/user.queries';
@Injectable()
export class UsuarioCommonService {

    constructor(private dbService: DbService){}

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
