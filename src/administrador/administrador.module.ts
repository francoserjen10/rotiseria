import { Module } from '@nestjs/common';
import { SalesSistemService } from './services/salesSistem.service';
import { SalesSistemController } from './controllers/salesSistem.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [SalesSistemController],
  providers: [SalesSistemService]
})
export class AdministradorModule {}
