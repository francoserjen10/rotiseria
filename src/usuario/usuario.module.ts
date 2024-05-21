import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [CommonModule],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule { }
