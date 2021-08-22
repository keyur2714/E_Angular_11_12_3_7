import { Component, OnInit } from '@angular/core';
import { AngularQuestion } from '../model/angularQuestion';
import { BigDataQuestion } from '../model/bigDataQuestion';
import { IQuestion } from '../model/iQuestion';
import { SpringQuestion } from '../model/springQuestion';

const objectString = {provide : IQuestion , useClass : BigDataQuestion};

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    objectString
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';  

  constructor(private iQuestion : IQuestion) { }

  ngOnInit(): void {
    this.startExam();
  }

  startExam() : void{
    this.question = this.iQuestion.askQuestion();
  }

}
