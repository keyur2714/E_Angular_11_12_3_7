import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  personForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createPersonForm();
  }

  createPersonForm() : void{
    this.personForm = new FormGroup(
      {
        name : new FormControl('Keyur',Validators.required),
        email : new FormControl('',[Validators.required,Validators.email]),
        mobileNo : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]),
        city : new FormControl()
      }
    )
  }

  save() : void{
    console.log(this.personForm);
    console.log(this.personForm.value);
  }

}
