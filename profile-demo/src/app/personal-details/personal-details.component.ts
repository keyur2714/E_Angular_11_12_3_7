import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  firstName : string = 'Keyursinh';
  lastName : string = 'Thakor';
  age : number = 34;
  gender : string = 'Male';
  dateOfBirth : Date = new Date();

  constructor() { 
    console.log("Personal Details Component Object Created...!");
  }

  ngOnInit(): void {
    console.log("Personal Details Component Initialized...!");
    this.dateOfBirth = new Date("1986-12-27");
  }

}
