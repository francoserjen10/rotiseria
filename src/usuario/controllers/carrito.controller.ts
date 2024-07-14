import { Controller } from '@nestjs/common';
import { CarritoService } from '../services/carrito.service';

@Controller('controllers')
export class CarritoController {

    constructor(private carritoService:CarritoService) {

    }
}
