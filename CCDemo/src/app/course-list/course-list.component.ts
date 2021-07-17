import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList  : Course[] = [];

  headerList : string[] = ["Id","Corse Code","Course Name","Fees"];

  fieldList : string[] = ["id","courseCode","courseName","fees"];

  currentCourse  : Course = new Course(0);

  constructor() { }

  ngOnInit(): void {
    let course1 = new Course(11,"ANG","Angular 11",13800);
    let course2 = new Course(12,"JAVA","Core Java 8",8800);
    let course3 = new Course(13,"REACT","React JS",13800);

    this.courseList = [course1,course2,course3];

    this.currentCourse = course3;
  }

  selectedCourse(course : Course) : void{
    console.log("2");
    console.log(course);
    this.currentCourse = course;
  }
}
