import { Component, ElementRef, ViewChild } from '@angular/core';
import { ValidateDirctive } from './directive/validate.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive Demo';

  myColor : string = 'blue';
  myFontSize : string = '15px';

  @ViewChild("s")
  txtInput : ElementRef;

  @ViewChild("a")
  aInput : ElementRef;

  @ViewChild(ValidateDirctive)
  validateDir : ValidateDirctive;

  validateStr(s) : void {    
    this.validateDir.str = s;
    this.validateDir.element = this.txtInput;
    let status = this.validateDir.checkValid();
    //alert(status);    
  }
}
