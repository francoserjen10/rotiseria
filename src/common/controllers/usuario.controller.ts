import { Controller, Get, Req } from '@nestjs/common';
import { UsuarioCommonService } from '../services/usuario.service';

@Controller('/usuarios')
export class UsuarioCommonController {

    constructor(private usuarioService: UsuarioCommonService){}
   

    @Get()
    async allUsers() {
        const user = await this.usuarioService.getAllUsers();
        return user;
    }
}
