import { Test, TestingModule } from '@nestjs/testing';
import { SalesSistemController } from './sales-sistem.controller';

describe('SalesSistemController', () => {
  let controller: SalesSistemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesSistemController],
    }).compile();

    controller = module.get<SalesSistemController>(SalesSistemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
