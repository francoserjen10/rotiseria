import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [CommonModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
