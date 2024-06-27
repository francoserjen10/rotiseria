import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioCommonController } from './usuario.controller';

describe('UsuarioController', () => {
  let controller: UsuarioCommonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioCommonController],
    }).compile();

    controller = module.get<UsuarioCommonController>(UsuarioCommonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
