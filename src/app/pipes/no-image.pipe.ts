import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform( value : any )   {


      if ( value.length  == 0) {
        return '/assets/images/no-image.png';
      }

      if( value.images.length > 0 ) {

          return value.images[0].url
      }else {
        return 'assets/images/no-image.png';
      }
  }

}
