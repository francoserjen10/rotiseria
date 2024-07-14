import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { CarritoController } from './controllers/carrito.controller';
import { CarritoService } from './services/carrito.service';

@Module({
    imports: [UsuarioModule, CommonModule],
    controllers: [CarritoController],
    providers: [CarritoService],
})
export class UsuarioModule { }
