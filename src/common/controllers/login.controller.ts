import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import { IUserDTO } from "src/usuario/dto/usuario.dto";
import { JwtMiddlewareGuard } from "src/common/middleware/jwtGuard.service";
import { LoginService } from "src/common/services/login.service";


@Controller('/auth')
// @UseGuards(JwtMiddlewareGuard)
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post('/createUser')
    async createUser(@Body() body: IUserDTO) {
        console.log("Si entre", body);
        const user = await this.loginService.createUser(body);
        console.log("Controlador del create user", user)
        if (!user) {
            throw new HttpException('Ocurrio un error al crear el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this.loginService.login(user);
    }

    @Post('/login')
    async login(@Body() body: { email: string, password: string }) {
        const user = await this.loginService.validateUser(body.email, body.password);
        console.log("Controlador del login post", user)
        if (!user) {
            throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
        }
        return this.loginService.login(user);
    }

    // @Get('/info')
    // async getInformacionUsuario(@Req() request) {
    //     console.log(request.user);
    //     //Me da undefined
    //     return request.user
    // } 

    @Get('/allUsers')
    async allUsers() {

        const user = await this.loginService.getAllUsers();
        console.log("Controlador del login post", user)
        return user;
    }
}