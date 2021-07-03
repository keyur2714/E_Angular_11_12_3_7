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

  constructor() { }

  ngOnInit(): void {
  }

}
