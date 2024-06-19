import { Test, TestingModule } from '@nestjs/testing';
import { SalesSistemService } from './salesSistem.service';

describe('SalesSistemService', () => {
  let service: SalesSistemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesSistemService],
    }).compile();

    service = module.get<SalesSistemService>(SalesSistemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
