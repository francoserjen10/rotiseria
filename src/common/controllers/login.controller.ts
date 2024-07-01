import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { IUserDTO } from 'src/usuario/dto/usuario.dto';
import { JwtMiddlewareGuard } from '../middleware/jwtGuard.service';

@Controller('/access')
@UseGuards(JwtMiddlewareGuard)
export class LoginController {

    constructor(private loginService: LoginService) { }

    @Post('/createUser')
    async createUser(@Body() body: IUserDTO) {
        const user = await this.loginService.createUser(body);
        if (!user) {
            throw new HttpException('Ocurrio un error al crear el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this.loginService.login(user);
    }

    @Post('/loginAccess')
    async login(@Body() body: { email: string, password: string }) {
        try {
            const user = await this.loginService.validateUser(body.email, body.password);
            if (!user) {
                throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
            }
            return this.loginService.login(user);
        } catch (error) {
            console.log("error", error)
            return null
        }
    }

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
}