import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcasts.entity';
import { Episode } from './entities/episode.entity';

@Injectable()
export class PodcastsService {
    private podcasts: Podcast[] = [];

    getAll(): Podcast[] {
        return this.podcasts;
    }

    getOne(id: string): Podcast {
        const podcast = this.podcasts.find(podcast => podcast.id === +id);
        if (!podcast) {
            throw new NotFoundException(`podcast with ID ${id} not found.`);
        }
        return podcast;
    }

    deleteOne(id: string) {
        const podcast = this.getOne(id);
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== +id);
        return podcast;
    }

    create(podcastData) {
        this.podcasts.push({
            id: this.podcasts.length + 1,
            ...podcastData,
        });
        return this.getAll();
    }

    update(id: string, updateData) {
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcasts.push({ ...podcast, ...updateData });
    }

    getEpisodes(id: string): Episode[] {
        const podcast = this.podcasts.find(podcast => podcast.id === +id);
        if (!podcast) {
            throw new NotFoundException(`podcast with ID ${id} not found.`);
        }
        return podcast.episodes;
    }

}
