import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';
import { Trainer } from './trainer.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  course : Course = new Course();
  trainerList : Trainer[] = [];

  constructor() { }

  ngOnInit(): void {
    let trainer1 = new Trainer(11,'Keyur',15000);
    let trainer2 = new Trainer(12,'jatin',17000);
    let trainer3 = new Trainer(13,'akshay',14000);
    this.trainerList.push(trainer1);
    this.trainerList.push(trainer2);
    this.trainerList.push(trainer3);
    this.course.courseCode = 'ANG';
    this.course.courseName = 'Angular';
    this.course.fees = 13800;
    this.course.trainer = trainer1;
    this.course.courseCategory = 'ONLINE';
  }

  save(frm : NgForm) : void {
    alert("Thanks !");
    console.log(frm);
    if(frm.valid){
      console.log("====================");
      console.log(this.course);
      console.log("====================");
      console.log(frm.value);
      console.log(frm.controls['courseCode'].value);
      console.log(frm.controls['courseName'].value);
      console.log(frm.controls['fees'].value);
    }
  }
}
