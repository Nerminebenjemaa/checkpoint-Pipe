import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {


  transform(defaultImage: string): string {

    return defaultImage.slice(7,);
  }

}
