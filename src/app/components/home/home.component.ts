import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albums: any[] = [];
  constructor( private spotifyService: SpotifyService ) { }
  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe( data => this.albums = data);
  }

}
