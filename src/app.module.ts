import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './common/services/login.service';
import { DatabaseService } from './common/services/db.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './common/controllers/login.controller';
import { JwtMiddlewareGuard } from './common/middleware/jwtGuard.service';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
