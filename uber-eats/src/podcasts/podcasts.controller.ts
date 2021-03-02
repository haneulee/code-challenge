import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { Podcast } from './entities/podcasts.entity';
import { PodcastsService } from './podcasts.service';
import { Episode } from './entities/episode.entity';

@Controller('podcasts')
export class PodcastsController {
    constructor(private readonly podcastService: PodcastsService) { }

    @Get()
    getAll(): Podcast[] {
        return this.podcastService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') podcastId: string): Podcast {
        return this.podcastService.getOne(podcastId);
    }

    @Post()
    create(@Body() podcastData) {
        return this.podcastService.create(podcastData);
    }

    @Delete(':id')
    remove(@Param('id') podcastId: string) {
        return this.podcastService.deleteOne(podcastId);

    }

    @Patch(':id')
    patch(@Param('id') podcastId: string, @Body() updateData) {
        return this.podcastService.update(podcastId, updateData);
    }

    @Get(':id/episodes')
    getEpisodes(@Param('id') podcastId: string): Episode[] {
        return this.podcastService.getEpisodes(podcastId);
    }

    // @Post()
    // createEpisode(@Body() podcastData) {
    //     return this.podcastService.create(podcastData);
    // }
}
