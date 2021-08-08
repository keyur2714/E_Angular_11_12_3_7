import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student.model';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  students : Student[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    let student1 = new Student(1,"keyur",34,"7387029671");
    let student2 = new Student(2,"denish",35,"7387029112");
    let student3 = new Student(3,"vinit",36,"7387029321");
    let student4 = new Student(4,"hiren",36,"7387029432");

    this.students.push(student1);
    this.students.push(student2);
    this.students.push(student3);
  }

  addNewStudent() : void {
    this.router.navigate(['student-entry']);
  }
}
