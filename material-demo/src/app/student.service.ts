import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    let student1 = new Student(1,'keyur','pune','7387029671','keyurjava27@gmail.com');
    let student2 = new Student(2,'denish','surat','7387029111','denishjava27@gmail.com');
    let student3 = new Student(3,'vinit','bardoli','7387029222','vinitjava27@gmail.com');
    return of([student1,student2,student3]);
    //return this.httpClient.get<Student[]>(this.apUrl);
  }

  getStudentById(id : number) : Observable<Student> {
    return this.httpClient.get<Student>(this.apUrl+"/"+id);
  }

  save(student : Student) : Observable<Student>{
    return this.httpClient.post<Student>(this.apUrl,student);
  }
  
  update(student : Student) : Observable<Student> {
    return this.httpClient.put<Student>(this.apUrl+"/"+student.id,student);
  }

  delete(id : number) : Observable<void>{
    return this.httpClient.delete<void>(this.apUrl+"/"+id);
  }
}