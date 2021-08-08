import { Location, LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  back() : void{
    this.location.back();
  }
}
