import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input() dataList : any[] = [];
  @Input() headerList : string[] = [];
  @Input() fieldList : string[] = [];


  @Input() bgColor : string = 'dark';
  @Input() textColor : string = 'info';

  currentRow : any ;

  @Output() getSelectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedRow(selectedRow : any) : void {
    console.log("1");
    this.currentRow = selectedRow;
    this.getSelectedItem.emit(selectedRow);
  }

}
