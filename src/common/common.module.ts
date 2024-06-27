import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/common/controllers/login.controller';
import { JwtMiddlewareGuard } from './middleware/jwtGuard.service';
import { ImageService } from './services/image.service';
import { ImagesController } from './controllers/images.controller';
import { SistemOfShoppingController } from './controllers/sistemOfShopping.controller';
import { SistemOfShoppingService } from './services/sistemOfShopping.service';
import { DbService } from './services/db.service';
import { UsuarioCommonService } from './services/usuario.service';
import { UsuarioCommonController } from './controllers/usuario.controller';
import { LoginService } from './services/login.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'bucoenapbdoacnaocnsaoilchnsaoicsaoicnsaoiclnsaocnsancisbncoajcnsao',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [LoginController, ImagesController, SistemOfShoppingController, UsuarioCommonController],
    providers: [LoginService, JwtMiddlewareGuard, ImageService, SistemOfShoppingService, DbService, UsuarioCommonService],
    exports: [JwtMiddlewareGuard, JwtModule, DbService],
})
export class CommonModule { }
