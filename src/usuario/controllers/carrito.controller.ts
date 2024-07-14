import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CarritoService } from '../services/carrito.service';
import { ICarritoDTO } from '../dto/carritousuario.dto';
import { JwtMiddlewareGuard } from 'src/common/middleware/jwtGuard.service';

@Controller('usuario-carrito')
@UseGuards(JwtMiddlewareGuard)

export class CarritoController {

    constructor(private carritoService: CarritoService) { }

    @Post('/create-usuario-carrito')
    async createCarrito(@Body() body: ICarritoDTO) {
        const carrito = await this.carritoService.createCarritoService(body);
        if (!carrito) {
            throw new HttpException('Ocurrio un error al crear el carrito de compra', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return carrito;
    }
}
