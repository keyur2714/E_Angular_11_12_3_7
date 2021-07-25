import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(frm : NgForm) : void {
    alert("Thanks !");
    //console.log(frm.value);
    if(frm.valid){
      console.log(frm.value);
      console.log(frm.controls['courseCode'].value);
      console.log(frm.controls['courseName'].value);
      console.log(frm.controls['fees'].value);
    }
  }
}
