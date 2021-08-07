import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  personForm : FormGroup;

  person = new Person();
  isSubmitted : boolean = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    //this.createPersonForm();
    this.createPersonFormWithBuilder();
  }

  createPersonFormWithBuilder() : void {
    this.personForm = this.formBuilder.group(
      {
        //name : this.formBuilder.control('Name',Validators.required),
        name : ['Keyur',Validators.required],
        email : this.formBuilder.control('',[Validators.required,Validators.email]),
        mobileNo : ['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]],
        city : [''],
        hobby : this.formBuilder.array(['']),
        //contactDetails : this.formBuilder.group(new Contact())
      }
    )
  }

  createPersonForm() : void{
    this.personForm = new FormGroup(
      {
        name : new FormControl('Keyur',Validators.required),
        email : new FormControl('',[Validators.required,Validators.email]),
        mobileNo : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]),
        city : new FormControl(),
        hobby : new FormArray([new FormControl('')])
      }
    )
  }

  save() : void{
    console.log(this.personForm);
    console.log(this.personForm.value);
    if(this.personForm.valid){
      this.person = this.personForm.value;
      this.isSubmitted = true;
    }    
  }

  resetForm() : void {
    //this.personForm.setValue({"name" : "Keyur","email" : '',"mobileNo" : '',"city" : '',"hobby" : ['']});    
    this.personForm.patchValue({"name" : "Keyur","email" : "keyurjava27@gmail.com"});
  }

  addNew() : void {
    let newHobby = new FormControl();
    (<FormArray>this.personForm.controls['hobby']).push(newHobby);
  }

}
