import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-list/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentId : number = 0;

  student : Student = new Student();

  constructor(private activatedRoute : ActivatedRoute,private location : Location,private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params.id;
    this.getStudentById(this.studentId);
  }

  getStudentById(id : number) : void {
    this.studentService.getStudentById(id).subscribe(
      (student : Student)=>{
        this.student = student;
      }
    )
  }

  back() : void{
    this.location.back();
  }

}
