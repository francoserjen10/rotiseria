import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/common/controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { JwtMiddlewareGuard } from './middleware/jwtGuard.service';
import { ImageService } from './services/image.service';
import { ImagesController } from './controllers/images.controller';

@Module({
    imports: [
        JwtModule.register({
            secret: 'bucoenapbdoacnaocnsaoilchnsaoicsaoicnsaoiclnsaocnsancisbncoajcnsao',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [LoginController, ImagesController],
    providers: [LoginService, DatabaseService, JwtMiddlewareGuard, ImageService],
    exports: [DatabaseService, JwtMiddlewareGuard, JwtModule],
})
export class CommonModule { }
