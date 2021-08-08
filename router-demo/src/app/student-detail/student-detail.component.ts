import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id : number = 0;
  name : string = '';
  age : number = 0;
  mobileNo : string = '';

  constructor(private activatedRoute : ActivatedRoute,private location : Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.id = params.id;
        this.name = params.name;
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (queryParamas)=>{
        this.age = queryParamas.age;
        this.mobileNo = queryParamas.mobileNo;
      }
    )
  }

  back() : void{
    this.location.back();
  }
}
