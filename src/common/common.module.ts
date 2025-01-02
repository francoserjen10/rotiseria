import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/common/controllers/login.controller';
import { JwtMiddlewareGuard } from './middleware/jwtGuard.service';
import { ImageService } from './services/image.service';
import { ImagesController } from './controllers/images.controller';
import { DbService } from './services/db.service';
import { UsuarioCommonService } from './services/usuario.service';
import { UsuarioCommonController } from './controllers/usuario.controller';
import { LoginService } from './services/login.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '1h' },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [LoginController, ImagesController, UsuarioCommonController],
    providers: [LoginService, JwtMiddlewareGuard, ImageService, DbService, UsuarioCommonService],
    exports: [JwtMiddlewareGuard, JwtModule, DbService],
})
export class CommonModule { }
