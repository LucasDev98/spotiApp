import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent {
    error : boolean = false;
    constructor( private spotifyService : SpotifyService,
                 private router : Router ) {

    }

    guardarToken( token : string ) {
        if ( token.length > 15 ){
          this.spotifyService.reactivarToken( token );
          this.error = false;
          setTimeout( ()=> {
              this.router.navigateByUrl('home');
          },2000)
        }else {

            this.mostrarError();
        }
    }

    mostrarError( ){
         this.error = true;
    }


}
