import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local db
    // local array

    private readonly songs = [];


    create(song: any){
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // throw new Error('Error in db while fetching records');
        return this.songs;
    }
}
