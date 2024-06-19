import { Test, TestingModule } from '@nestjs/testing';
import { SistemOfShoppingService } from './sistemOfShopping.service';

describe('SistemOfShoppingService', () => {
  let service: SistemOfShoppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SistemOfShoppingService],
    }).compile();

    service = module.get<SistemOfShoppingService>(SistemOfShoppingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
