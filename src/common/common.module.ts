import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/common/controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { JwtMiddlewareGuard } from './middleware/jwtGuard.service';
import { ImageService } from './services/image.service';
import { ImagesController } from './controllers/images.controller';
import { SistemOfShoppingController } from './controllers/sistemOfShopping.controller';
import { SistemOfShoppingService } from './services/sistemOfShopping.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'bucoenapbdoacnaocnsaoilchnsaoicsaoicnsaoiclnsaocnsancisbncoajcnsao',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [LoginController, ImagesController, SistemOfShoppingController],
    providers: [LoginService, DatabaseService, JwtMiddlewareGuard, ImageService, SistemOfShoppingService],
    exports: [DatabaseService, JwtMiddlewareGuard, JwtModule],
})
export class CommonModule { }
