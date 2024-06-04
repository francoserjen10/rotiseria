import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { JwtMiddlewareGuard } from 'src/common/middleware/jwtGuard.service';

@Controller('/usuarios')
@UseGuards(JwtMiddlewareGuard)
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }

    @Get('/info')
    async getInformacionUsuario(@Req() request) {
        if(request && request.user) {
            return request.user;    
        } else (err){
            console.error(err)
        }
    }

    @Get()
    async allUsers() {
        const user = await this.usuarioService.getAllUsers();
        return user;
    }
}
