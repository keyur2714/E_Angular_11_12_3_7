import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  msg : string = 'Hello Radhe Krishna...!'; //model/attribute/property
  name : string = 'Keyursinh Thakor';
  title : string = 'profile-demo';
 

  personList: Person[] = [];

  constructor(){
    console.log("App Component Object Created...!");
  }

  ngOnInit(){
    console.log("AppComponent Object Initialized...!");
    let person1 = new Person("Vinit","Shah",36,"Male",new Date("1985-08-23"));
    let person2 = new Person("Denish","Patel",35,"Male",new Date("1985-05-24"));
    let person3 = new Person("Keyur","Thakor",34,"Male",new Date("1986-12-27"));
    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);
  }
}
