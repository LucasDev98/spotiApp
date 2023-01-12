import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artists : any [] = [];
  constructor( private spotifyService : SpotifyService ) {

  }
  buscarArtista( termino : string ) {
      this.spotifyService.getArtists( termino )
          .subscribe( ( data : any ) => {
            console.log( data )
            this.artists = data;
          });
  }
}
