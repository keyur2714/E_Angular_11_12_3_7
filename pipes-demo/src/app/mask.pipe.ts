import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string,maskChar : string,noOfMaskChar : number): unknown {
    console.log(value+" "+maskChar+" "+noOfMaskChar);
    let maskString = '';    
    //alert(visibleString);
    for(let i=1;i<=value.length-noOfMaskChar;i++){
      maskString = maskString + maskChar;
    }
    let visibleString = value.substring(value.length-noOfMaskChar);
    return maskString+visibleString;
  }

}
