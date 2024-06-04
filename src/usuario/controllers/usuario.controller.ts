import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { JwtMiddlewareGuard } from 'src/common/middleware/jwtGuard.service';

@Controller('/usuarios')
@UseGuards(JwtMiddlewareGuard)
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }

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
