import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo.');
    this.getNewRelease();
  }

  getNewRelease(){
        const headers = new HttpHeaders({
      Authorization : 'Bearer BQDlhB23C5gXNhl4z7OjKrIxepcCKr2Z_xQPl7_uyBiLZ2drmNj8xiKoMuq6028YDATjCDQXtm3zZ5EZnGw'
    });
        this.http.get('https://api.spotify.com/v1/browse/new-releases?country=AR&offset=0&limit=20', { headers }).subscribe( (data) => {
      console.log(data);
    });

  }
}
