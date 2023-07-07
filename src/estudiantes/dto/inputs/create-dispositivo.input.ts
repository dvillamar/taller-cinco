import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateDispositivoInput {



  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;

  @Field(()=>String )
  @IsNotEmpty()
  modelo:string;

  @Field(()=>String )
  @IsNotEmpty()
  serie:string;
  
  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;


}
