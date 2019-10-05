import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {
  
  transform(value: any, ...args: any[]): any {
    const mayuscula:string=value.charAt(0).toUpperCase()+value.slice(1);
    return mayuscula;
  }

}
