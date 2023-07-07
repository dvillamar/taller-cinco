import { Module } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { DispositivosResolver } from './dispositivos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositivo } from './entities/dispositivo.entity';

@Module({
  providers: [DispositivosResolver, DispositivosService],
  imports:[
    TypeOrmModule.forFeature([Dispositivo])
  ]
})
export class DispositivosModule {}
