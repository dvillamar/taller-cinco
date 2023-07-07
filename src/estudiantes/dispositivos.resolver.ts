import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { DispositivosService } from './dispositivos.service';
import { Dispositivo } from './entities/dispositivo.entity';
import { UpdateDispositivoInput, CreateDispositivoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Dispositivo)
export class DispositivosResolver {
  constructor(private readonly dispositivosService: DispositivosService) {}

  @Mutation(() => Dispositivo)
  async createDispositivo(@Args('createDispositivoInput') createDispositivoInput: CreateDispositivoInput)
  :Promise<Dispositivo> {
    return this.dispositivosService.create(createDispositivoInput);
  }

  @Query(() => [Dispositivo], { name: 'dispositivos' })
  async findAll():Promise<Dispositivo[]> {
    return this.dispositivosService.findAll();
  }

  @Query(() => Dispositivo, { name: 'dispositivos' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Dispositivo> {
    return this.dispositivosService.findOne(id);
  }

  @Mutation(() => Dispositivo)
  updateDispositivo(@Args('updateDispositivoInput') updateDispositivoInput: UpdateDispositivoInput): Promise<Dispositivo> {
    return this.dispositivosService.update(updateDispositivoInput.id, updateDispositivoInput);
  }

  @Mutation(() => Dispositivo)
  removeDispositivo(@Args('id', { type: () => ID }) id: string): Promise<Dispositivo> {
    return this.dispositivosService.remove(id);
  }
}
