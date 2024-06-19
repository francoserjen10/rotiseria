import { Test, TestingModule } from '@nestjs/testing';
import { SistemOfShoppingController } from './sistemOfShopping.controller';

describe('SistemOfShoppingController', () => {
  let controller: SistemOfShoppingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SistemOfShoppingController],
    }).compile();

    controller = module.get<SistemOfShoppingController>(SistemOfShoppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
