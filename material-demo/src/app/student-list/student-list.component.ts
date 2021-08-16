import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentListDataSource, StudentListItem } from './student-list-datasource';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Student>;
  

  dataSource : MatTableDataSource<Student> = new MatTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'city' , 'mobileNo' ,'email','action'];

  constructor(private studentService : StudentService,private router : Router) {   
  }

  ngOnInit() : void{
    this.getAllStudents();
  }

  getAllStudents() : void {
    this.studentService.list().subscribe(
      (students : Student[])=>{
        this.dataSource.data = students;
      }
    )
  }

  detail(id : number) : void {
    this.router.navigate(['student-detail',id]);
  }

  delete(id : number) : void {    
    let confirmMsg = confirm("Are you sure want to delete Student with Id : "+id+" ?");
    if(confirmMsg){
      this.studentService.delete(id).subscribe(
        ()=>{
          alert("Student Deleted Successfullly with Id : "+id);
          this.getAllStudents();
        }
      )
      
    }    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  edit(id : number) : void {
    this.router.navigate(['student-update',id]);
  }
}
