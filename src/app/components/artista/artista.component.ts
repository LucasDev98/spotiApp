import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
      spinner! :  boolean;
      artist   : any  = [];
      topTracks! : any [];

      constructor( private activateRoute : ActivatedRoute,
                   private spotifyService : SpotifyService  ) {
        this.activateRoute.params.subscribe( (  param : any ) => {
                  this.spinner = true;
                  this.getArtista( param.id );
                  this.getTopTracks( param.id );
                })

        }


        getArtista( id : string ) {

          this.spotifyService.getArtistById( id )
              .subscribe(  data => {
                  console.log( data )
                  this.artist = data;
                  this.spinner = false;
              })
      }

      getTopTracks( id : string ) {

          this.spotifyService.getTopTracks( id )
              .subscribe( data => {
                console.log( data );
                this.topTracks = data;
              })
      }

}
