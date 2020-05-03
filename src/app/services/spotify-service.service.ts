import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getTokenHeader(){
    const header = new HttpHeaders(
      { Authorization : 'Bearer BQDgEl9QxUr1QP7PVMkhoVuq_a3_hUHW9KlJ9VIztF2kRj2QWcmvgQInWn88Lvo5I-znqOp0GYid2bef344' });
    return header;
  }

  getQuery(query: string){
    const headers = this.getTokenHeader();
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers })
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( (data: any) => {
        return data.artists.items;
      }));
  }

}

/* 'grant_type': 'client_credentials'
    });
    const options = new RequestOptions(
      {
        ,
        'client_id' : 'd6004b36aa754e058e8f635560a338ac',
        'client_secret' : 'ea9887c995484e02ae1d86564d353f9a'
      });
  */
