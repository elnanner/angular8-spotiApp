import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  searchedArtists: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string){
    this.spotifyService.getArtist(termino).subscribe((data: any) => {
      // console.log(data);
      this.searchedArtists = data;
       console.log(this.searchedArtists);
    });
  }
}
