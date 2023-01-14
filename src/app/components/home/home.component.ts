import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    releases : any []= [];
    spinner : boolean = true;
    constructor( private spotifyService : SpotifyService ) {

        //This service will obtain the 20 releases
        this.spotifyService.getNewReleases()
              .subscribe( ( data : any )=> {

                this.releases = data;
                console.log(this.releases)
                this.spinner = false;
              })
      //------------------------------------------
    }




}
