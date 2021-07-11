import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spting-operation',
  templateUrl: './spting-operation.component.html',
  styleUrls: ['./spting-operation.component.css']
})
export class SptingOperationComponent implements OnInit {

  str : string = 'Data Binding';
  result : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toUpper() : void {
    this.result = this.str.toUpperCase();
  }

  toLower() : void {
    this.result = this.str.toLowerCase();
  }

  reverse() : void {
    //alert(this.str.split('').reverse().join(''));
    this.result = this.str.split('').reverse().join('');
  }

}
