import { Controller, Get, Req } from '@nestjs/common';
import { UsuarioCommonService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioCommonController {

    constructor(private usuarioService: UsuarioCommonService){}
    @Get('/info')
    async getInformacionUsuario(@Req() request) {
        try {
            if (request && request.user) {
                return request.user;
            } else {
                throw new Error("El usuario no se encontro");
            }
        } catch (err) {
            console.error(err);
            return { error: "Se produjo un error al obtener la informacion del usuario" };
        }
    }

    @Get()
    async allUsers() {
        const user = await this.usuarioService.getAllUsers();
        return user;
    }
}
