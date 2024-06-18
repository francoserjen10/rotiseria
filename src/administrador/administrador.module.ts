import { Module } from '@nestjs/common';
import { SalesSistemService } from './services/sales-sistem.service';
import { SalesSistemController } from './controllers/sales-sistem.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [SalesSistemController],
  providers: [SalesSistemService]
})
export class AdministradorModule {}
