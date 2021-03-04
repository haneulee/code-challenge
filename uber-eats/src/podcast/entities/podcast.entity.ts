import { Episode } from './episode.entity';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@InputType ({ isAbstract: true})
@ObjectType()
@Entity()
export class Podcast {
  @PrimaryGeneratedColumn()
  @Field((_) => Number)
  @IsNumber()
  id: number;

  @Field((_) => String)
  @Column()
  @IsString()
  title: string;

  @Field((_) => String, {defaultValue: 'test'})
  @Column({default: 'test'})
  @IsString()
  @IsOptional()
  category: string;

  @Field((_) => Number, {defaultValue: 0})
  @Column({default: 0})
  @IsNumber()
  @IsOptional()
  rating: number;

  @OneToMany(() => Episode, episode => episode.podcast)
  @Field(type => [Episode])
  episodes: Episode[];
}
