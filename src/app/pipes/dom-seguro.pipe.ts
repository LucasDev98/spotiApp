import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
    constructor( public sanitizer : Sanitizer,
                 public domSanitizer : DomSanitizer ) {

    }
  transform( value : string, url : string ) {


      return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
