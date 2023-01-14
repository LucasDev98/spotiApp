import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists : any [] = [];
  spinner : boolean = false;
  constructor( private spotifyService : SpotifyService ) {

  }
  buscarArtista( termino : string ) {
      this.spinner = true;
      this.spotifyService.getArtists( termino )
          .subscribe( ( data : any ) => {
            console.log(data)
            this.artists = data;
            this.spinner = false;
          });
  }
}
