import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioCommonService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioCommonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioCommonService],
    }).compile();

    service = module.get<UsuarioCommonService>(UsuarioCommonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
