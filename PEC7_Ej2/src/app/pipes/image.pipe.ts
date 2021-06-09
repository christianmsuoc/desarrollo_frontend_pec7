import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string | undefined, ...args: string[]): string {
    if (!value || value === '') {
      return args[0] ? args[0] : 'assets/images/muga.png'
    }
    return value;
  }
}
