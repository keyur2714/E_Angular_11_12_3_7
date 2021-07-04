import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  educations : Education[] = []; //instance variable

  // educationList = [
  //   {
  //     "degree" : "S.S.C",
  //     "per" : 72.14,
  //     "year" : 2002,
  //     "university" : "GSEB"
  //   },
  //   {
  //     "degree" : "H.S.C",
  //     "per" : 66.50,
  //     "year" : 2004,
  //     "university" : "GHSEB"
  //   },
  //   {
  //     "degree" : "B-Tech",
  //     "per" : 65.00,
  //     "year" : 2008,
  //     "university" : "SP Uni."
  //   },
  //   {
  //     "degree" : "M-Tech",
  //     "per" : 67.00,
  //     "year" : 2010,
  //     "university" : "SP Uni."
  //   }
  // ];

  constructor() { 
    console.log("Education Detail Component Object Created...");
  }

  ngOnInit(): void {    
    console.log("Education Detail Component Initialized...");
    let education1 = new Education();
    education1.degree = 'S.S.C';
    education1.per = 72.14;
    education1.year = 2002;
    education1.university = 'GSEB';

    let education2 = new Education('H.S.C',2004,66.50,'GHSEB');
    let education3 = new Education('B-Tech',2008,65.00,'SP Uni.');
    let education4 = new Education('M-Tech',2010,67.00,'SP Uni.');

    this.educations.push(education1);
    this.educations.push(education2);
    this.educations.push(education3);
    this.educations.push(education4);
  }

}
