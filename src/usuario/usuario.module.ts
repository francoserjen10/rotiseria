import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { CommonModule } from 'src/common/common.module';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [UsuarioModule, CommonModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule { }
