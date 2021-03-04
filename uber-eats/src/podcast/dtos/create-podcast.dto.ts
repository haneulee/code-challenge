import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class CreatePodcastDto extends OmitType(Podcast, ['id']) {}
