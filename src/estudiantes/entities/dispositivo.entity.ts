import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'dispositivos'})
@ObjectType()
export class Dispositivo {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=>String)
    descripcion:string;

    @Column()
    @Field(()=>String)
    modelo:string;

    @Column()
    @Field(()=>String)
    serie:string;


    @Column()
    @Field(()=>Boolean)
    estado:boolean;





}
