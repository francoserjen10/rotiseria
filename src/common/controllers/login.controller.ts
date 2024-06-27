import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
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

}