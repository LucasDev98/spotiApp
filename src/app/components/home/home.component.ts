import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    releases : any []= [];

    constructor( private spotifyService : SpotifyService ) {

        //This service will obtain the 20 releases
        this.spotifyService.getNewReleases()
              .subscribe( ( data : any )=> {
                this.releases = data;
              })

       if( localStorage.getItem('token') ) {

          console.log( this.releases );
       }else {
        console.log('no existe token')
       }
      //------------------------------------------
    }




}
