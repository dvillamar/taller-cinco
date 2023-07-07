import { IsUUID } from 'class-validator';
import { CreateDispositivoInput } from './create-dispositivo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDispositivoInput extends PartialType(CreateDispositivoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
