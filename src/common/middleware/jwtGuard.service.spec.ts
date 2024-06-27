import { Test, TestingModule } from '@nestjs/testing';
import { JwtMiddlewareGuard } from './jwtGuard.service';

describe('JwtGuardService', () => {
  let service: JwtMiddlewareGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtMiddlewareGuard],
    }).compile();

    service = module.get<JwtMiddlewareGuard>(JwtMiddlewareGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
