import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDispositivoInput, UpdateDispositivoInput } from './dto/inputs';
import { Dispositivo } from './entities/dispositivo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DispositivosService {

  constructor( 
    @InjectRepository(Dispositivo)
    private readonly dispositivosRepository:Repository<Dispositivo> ){}

  async create(createDispositivoInput: CreateDispositivoInput): Promise<Dispositivo>  {
    const newDispositivo= this.dispositivosRepository.create(createDispositivoInput);
    return await this.dispositivosRepository.save(newDispositivo); 
  }

  async findAll(): Promise<Dispositivo[]> {
    return this.dispositivosRepository.find();
  }

  async findOne(id: string): Promise<Dispositivo> {
     const dispositivo= await  this.dispositivosRepository.findOneBy({id});
     if (!dispositivo) throw new NotFoundException(`Not found`)
     return dispositivo;
  }

  async update(id: string, updateDispositivoInput: UpdateDispositivoInput): Promise<Dispositivo> {
    
    const dispositivo = await this.dispositivosRepository.preload(updateDispositivoInput);
    if (!dispositivo) throw new NotFoundException(`Not found`)
    return this.dispositivosRepository.save(dispositivo);

  }

  async remove(id: string): Promise<Dispositivo> {

    const dispositivo= await  this.findOne(id);
    await this.dispositivosRepository.update({id:id},{estado:false  });
    //await this.dispositivosRepository.remove(dispositivo);

    return {...dispositivo, id};

  }
}
