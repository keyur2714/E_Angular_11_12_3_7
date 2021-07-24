import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector : '[app-validate]'
})
export class ValidateDirctive{

    element : ElementRef;

    str : string = '';

    constructor() {
        console.log("Validate Directive Object Created...!");
    }



    checkValid() : boolean{                
        if(this.str === ''){
            this.element.nativeElement.style.border = '5px solid red';
            return false;
        }
        return true;
    }
}