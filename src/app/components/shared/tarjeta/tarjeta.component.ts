import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

    @Input()data : any [] = [];

    constructor( private router : Router ) {

    }


    verArtista( id : string ) {
      //Redirect to Artist Param : id
      this.router.navigate( ['artist', id ] );
    }
}
