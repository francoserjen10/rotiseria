import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { IUserDTO } from "src/dto/usuario.dto";
import { LoginService } from "src/services/login/login.service";


@Controller('/auth')
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
    async login(@Body() body: { name: string, password: string }) {
        const user = await this.loginService.validateUser(body.name, body.password);
        console.log("Controlador del login post", user)
        if (!user) {
            throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
        }
        return this.loginService.login(user);

    }

    @Get('/login')
    async allUsers() {

        const user = await this.loginService.getAllUsers();
        console.log("Controlador del login post", user)
        return user;

    }
}