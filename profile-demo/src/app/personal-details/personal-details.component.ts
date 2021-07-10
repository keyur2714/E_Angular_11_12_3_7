import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input("first-name") firstName : string = 'Keyursinh';
  @Input("last-name") lastName : string = 'Thakor';
  @Input("age") age : number = 34;
  @Input("gender") gender : string = 'Male';
  @Input("date-of-birth") dateOfBirth : Date = new Date();

  constructor() { 
    console.log("Personal Details Component Object Created...!");
  }

  ngOnInit(): void {
    console.log("Personal Details Component Initialized...!");
    //this.dateOfBirth = new Date("1986-12-27");
  }

}
