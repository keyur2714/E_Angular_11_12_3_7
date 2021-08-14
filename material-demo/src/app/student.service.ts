import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student-list/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apUrl : string = 'http://localhost:3000/students';

  constructor(private httpClient : HttpClient) { 
    console.log("StudentService Object Created....!");
  }

  list() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.apUrl);
  }

  getStudentById(id : number) : Observable<Student> {
    return this.httpClient.get<Student>(this.apUrl+"/"+id);
  }

  save(student : Student) : Observable<Student>{
    return this.httpClient.post<Student>(this.apUrl,student);
  }
}
