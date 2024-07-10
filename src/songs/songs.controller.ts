import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) {}
    
    @Post()
    addSong(@Body() createSongDTO: CreateSongDTO): object { 
        const songs = this.songService.create(createSongDTO);
        return {data: songs}
    }

    @Get()
    getAllSongs(): any {
        try{
            const songs = this.songService.findAll();
            return {data: songs};
        }
        catch(error){
            console.log("I am in the catch block", error)
            throw new HttpException('Server Error', HttpStatus.BAD_REQUEST)
        }
    }
    
    @Get(':id')
    getSpecificSong( @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id:number ): object {
        return {data: `fetch song based on ${id}`}
    }


    @Put(':id')
    updateSong( @Param() params:any ): object {
        const {id} = params;
        return {data: `update song based on ${id}`}
    }

    @Delete(':id')
    deleteSong( @Param() params:any ): string {
        return "Song Deleted Successfully"
    }
}
