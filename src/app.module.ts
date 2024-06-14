import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [CommonModule, UsuarioModule, AdministradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
