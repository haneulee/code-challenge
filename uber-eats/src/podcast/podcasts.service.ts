import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { CoreOutput } from './dtos/output.dto';
import {
  PodcastOutput,
  PodcastSearchInput,
  EpisodesOutput,
  EpisodesSearchInput,
} from './dtos/podcast.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Podcast)
    private readonly podcasts: Repository<Podcast>
  ){}
  // private podcasts: Podcast[] = [];

  getAllPodcasts(): Promise<Podcast[]> {
    return this.podcasts.find();
  }

  createPodcast(createPodcastDto: CreatePodcastDto): Promise<Podcast> {
    const newPodcast = this.podcasts.create(createPodcastDto)
    return this.podcasts.save(newPodcast);
  }

  // getPodcast(id: number): PodcastOutput {
  //   const podcast = this.podcasts.find((podcast) => podcast.id === id);
  //   if (!podcast) {
  //     return {
  //       ok: false,
  //       error: `${id} id podcast doesn't exist!`,
  //     };
  //   }
  //   return {
  //     ok: true,
  //     podcast,
  //   };
  // }

  // deletePodcast(id: number): CoreOutput {
  //   const { ok, error } = this.getPodcast(id);
  //   if (!ok) {
  //     return { ok, error };
  //   }
  //   this.podcasts = this.podcasts.filter((p) => p.id !== id);
  //   return { ok };
  // }


  updatePodcast({ id, data }: UpdatePodcastDto) {
    // const { ok, error, podcast } = this.getPodcast(id);
    // if (!ok) {
    //   return { ok, error };
    // }
    // this.podcasts = this.podcasts.filter((p) => p.id !== id);
    // this.podcasts.push({ ...podcast, ...rest });
    // return { ok };
    return this.podcasts.update(id, {...data})
  }

  // getEpisodes(podcastId: number): EpisodesOutput {
  //   const { podcast, ok, error } = this.getPodcast(podcastId);
  //   if (!ok) {
  //     return { ok, error };
  //   }
  //   return { ok: true, episodes: podcast.episodes };
  // }

  // createEpisode({
  //   id: podcastId,
  //   title,
  //   category,
  // }: CreateEpisodeDto): CoreOutput {
  //   const { podcast, ok, error } = this.getPodcast(podcastId);
  //   if (!ok) {
  //     return { ok, error };
  //   }
  //   const newEpisode: Episode = {
  //     id: podcast.episodes.length + 1,
  //     title,
  //     category,
  //     podcast,
  //   };
  //   this.updatePodcast({
  //     id: podcastId,
  //     episodes: [...podcast.episodes, newEpisode],
  //   });

  //   return { ok: true };
  // }

  // deleteEpisode({ podcastId, episodeId }: EpisodesSearchInput): CoreOutput {
  //   const { podcast, error, ok } = this.getPodcast(podcastId);
  //   if (!ok) {
  //     return { ok, error };
  //   }
  //   this.updatePodcast({
  //     id: podcastId,
  //     episodes: podcast.episodes.filter((episode) => episode.id !== episodeId),
  //   });

  //   return { ok: true };
  // }

  // updateEpisode({
  //   podcastId,
  //   episodeId,
  //   ...rest
  // }: UpdateEpisodeDto): CoreOutput {
  //   const { podcast, error, ok } = this.getPodcast(podcastId);
  //   if (!ok) {
  //     return { ok, error };
  //   }
  //   const episodeIdx = podcast.episodes.findIndex(({ id }) => id === episodeId);
  //   const newEpisode = { ...podcast.episodes[episodeIdx], ...rest };
  //   this.deleteEpisode({ podcastId, episodeId });
  //   const { podcast: changedPodcast } = this.getPodcast(podcastId);
  //   this.updatePodcast({
  //     id: podcastId,
  //     episodes: [...changedPodcast.episodes, newEpisode],
  //   });
  //   return { ok: true };
  // }
}
