import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student-list/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();

  studentId : number = 0;

  studentForm = this.fb.group({
    id : [null,Validators.required],
    name: [null, Validators.required],
    city: [null, Validators.required],
    mobileNo: [null, Validators.required],
    email: [null, Validators.required]
  });

  hasUnitNumber = false;
  
  constructor(private fb: FormBuilder,private studentService : StudentService,private router : Router,private activatedRoute : ActivatedRoute) {}

  ngOnInit() : void {
    this.studentId = this.activatedRoute.snapshot.params.id;
    if(this.studentId === undefined){
      this.studentId = 0;
    }
    if(this.studentId !== 0){
      this.studentService.getStudentById(this.studentId).subscribe(
        (student : Student)=>{
          this.student = student;
          this.studentForm.setValue(this.student);
        }
      )
    }
    //alert(this.studentId);
  }

  onSubmit(): void {
    if(this.studentForm.valid){      
      this.student = this.studentForm.value;
      if(this.studentId !== 0){        
        this.studentService.update(this.student).subscribe(
          (student)=>{
            alert("Student Updated Successfully.");
            this.studentId = 0;
            this.router.navigate(['student-list']);
          },
          (error)=>{
  
          }
        )  
      }else{
        this.studentService.save(this.student).subscribe(
          (student)=>{
            alert("Student Created Successfully.");
            this.router.navigate(['student-list']);
          },
          (error)=>{
  
          }
        )
      }      
    }
    //alert('Thanks!');
  }
}
