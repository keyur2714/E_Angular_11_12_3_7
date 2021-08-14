import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student-list/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  student : Student = new Student();

  studentForm = this.fb.group({
    id : [null,Validators.required],
    name: [null, Validators.required],
    city: [null, Validators.required],
    mobileNo: [null, Validators.required],
    email: [null, Validators.required]
  });

  hasUnitNumber = false;
  
  constructor(private fb: FormBuilder,private studentService : StudentService,private router : Router) {}

  onSubmit(): void {
    if(this.studentForm.value){
      this.student = this.studentForm.value;
      this.studentService.save(this.student).subscribe(
        (student)=>{
          alert("Student Created Successfully.");
          this.router.navigate(['student-list']);
        },
        (error)=>{

        }
      )
    }
    alert('Thanks!');
  }
}
