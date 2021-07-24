import { AfterContentChecked, AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterContentChecked{

  @Input() color : string = 'orange';
  @Input('font-size') fontSize : string = '25px';

  constructor(private element : ElementRef) { 
    console.log("Color Directive Object Created...!");
    console.log(element)
  }

  ngAfterContentChecked() {
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontSize = this.fontSize;
    this.element.nativeElement.style.background = 'black';
  }

}
