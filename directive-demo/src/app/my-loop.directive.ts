import { ElementRef } from '@angular/core';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {  

  constructor(private template : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }

  @Input("appMyLoop") set myLoop(loopCounter : number) {
    //alert(loopCounter);
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.template);
      let element : ElementRef = new ElementRef("<h1>Radhe Krishna</h1>");
      //let tmp : TemplateRef<any> = new ElementRef("<h1>Radhe Krishna</h1>");
      //this.template.
      //this.viewContainerRef.createEmbeddedView(tmp);
    }
  }

  @Input("appMyLoopData") set data(str : string) {
    console.log("=========="+str);
  }
}
