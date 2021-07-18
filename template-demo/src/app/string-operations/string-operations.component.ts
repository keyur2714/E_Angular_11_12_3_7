import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StringUtilComponent } from '../string-util.component';

@Component({
  selector: 'app-string-operations',
  templateUrl: './string-operations.component.html',
  styleUrls: ['./string-operations.component.css']
})
export class StringOperationsComponent implements OnInit {

  resut : string = '';

  @ViewChild("vl")
  value : ElementRef;
  

  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;

  constructor() { }

  ngOnInit(): void {    
  }

  upper() : void {
    this.stringUtilComponent.data = 'We are converting to Upper Case';
    let vl  = this.value.nativeElement.value;
    this.resut = this.stringUtilComponent.toUpper(vl);
  }

  lower() : void {
    this.stringUtilComponent.data = 'We are converting to Lower Case';
    let vl  = this.value.nativeElement.value;
    this.resut = this.stringUtilComponent.toLower(vl);
  }

  reverse() : void {
    this.stringUtilComponent.data = 'We are converting to Reverse String';
    let vl  = this.value.nativeElement.value;
    this.resut = this.stringUtilComponent.toReverse(vl);
  }
}
