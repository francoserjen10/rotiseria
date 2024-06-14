import { Module } from '@nestjs/common';
import { SalesSistemService } from './services/sales-sistem.service';
import { SalesSistemController } from './controllers/sales-sistem.controller';

@Module({
  controllers: [SalesSistemController],
  providers: [SalesSistemService]
})
export class AdministradorModule {}
