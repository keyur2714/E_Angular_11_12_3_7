import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList : Person[] = [];

  headerList : string[] = ["Id","Name","Email","Mobile No","City","Age"];

  fieldList : string[] = ["id","name","email","mobileNo","city","age"];

  currentPerson : Person = new Person(0);

  constructor() { }

  ngOnInit(): void {
    let person1 = new Person(11,"keyur","keyurjava27@gmail.com","7387029671","surat",34);
    let person2 = new Person(12,"denish","denishjava26@gmail.com","7387029431","mumbai",35);
    let person3 = new Person(13,"vinit","vinitjava44@gmail.com","7387029123","surat",36);

    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);

    this.currentPerson = person1;

  }

  selectedPerson(person : Person){
    this.currentPerson = person;
  }

}
