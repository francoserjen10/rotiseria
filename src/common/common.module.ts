import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/common/controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { JwtMiddlewareGuard } from './middleware/jwtGuard.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'bucoenapbdoacnaocnsaoilchnsaoicsaoicnsaoiclnsaocnsancisbncoajcnsao',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService, DatabaseService, JwtMiddlewareGuard],
    exports: [DatabaseService, JwtMiddlewareGuard, JwtModule],
})
export class CommonModule { }
