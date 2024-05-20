import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './services/login/login.service';
import { DatabaseService } from './common/db.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'bucoenapbdoacnaocnsaoilchnsaoicsaoicnsaoiclnsaocnsancisbncoajcnsao',
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, DatabaseService],
})
export class AppModule { }
