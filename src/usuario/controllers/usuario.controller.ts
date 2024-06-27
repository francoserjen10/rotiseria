import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { JwtMiddlewareGuard } from 'src/common/middleware/jwtGuard.service';

@Controller('/usuarios')
@UseGuards(JwtMiddlewareGuard)
export class UsuarioController {

    constructor() { }    
}
