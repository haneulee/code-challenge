import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Podcast } from './podcast.entity';

@InputType('EpisodeInput', { isAbstract: true})
@ObjectType()
@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  @Field((_) => Number)
  id: number;

  @Field((_) => String)
  @Column()
  title: string;

  @Field((_) => String)
  @Column()
  category: string;

  // @Field((_) => Podcast)
  @ManyToOne(() => Podcast, Podcast => Podcast.episodes)
  podcast: Podcast;
}
