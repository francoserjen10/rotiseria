import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [UsuarioModule, CommonModule],
    controllers: [],
    providers: [],
})
export class UsuarioModule { }
