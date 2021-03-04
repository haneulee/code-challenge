import { PodcastSearchInput } from './podcast.dto';
import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Episode } from '../entities/episode.entity';
import { CreatePodcastDto } from './create-podcast.dto';

@InputType()
export class UpdatePodcastInputType extends PartialType(CreatePodcastDto) {}

@InputType()
export class UpdatePodcastDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdatePodcastInputType)
  data: UpdatePodcastInputType;
}