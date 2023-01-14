import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token : string = JSON.stringify(localStorage.getItem('token') );
  constructor( private http : HttpClient ) {
  }


  getQuery( query : string ) {
    const headers = new HttpHeaders( {
      'Authorization': `Bearer ${ localStorage.getItem('token') }`
    });

    const url = ` https://api.spotify.com/v1/${query}`;

    return this.http.get( url , { headers });
  }



  getNewReleases() {

     return this.getQuery('browse/new-releases?limit=20')
                .pipe( map ( ( data : any ) => {
                  return data.albums.items
                } ) )
  }

  getArtists( termino : string ) {
      const url = `search?q=${ termino }y&type=artist&market=ES&limit=10`
      return this.getQuery( url )
          .pipe( map ( ( data : any ) => {
            return data.artists.items
          }) );
  }

  getArtistById( id : string  ){
      return this.getQuery( `artists/${id}` )
          .pipe( map( ( data : any ) => {
            return data;
          }))
  }

  getTopTracks( id : string ) {
      return this.getQuery(`artists/${id}/top-tracks?market=ES`)
          .pipe( map( ( data : any  ) => {
            return data.tracks;
          }))
  }

  reactivarToken( tokenString : string ){
    this.token = tokenString;
    this.guardarTokenLS();
  }
  guardarTokenLS() {
    localStorage.setItem('token', this.token)
  }
}
