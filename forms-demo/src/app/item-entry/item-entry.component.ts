import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Item } from './item.mode';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  productEntryForm = this.formBuilder.group({
    categoryId : ['',Validators.required],
    categoryName : ['',[Validators.required,Validators.minLength(3)]],
    items : this.formBuilder.array([this.formBuilder.group(new Item())])
  })


  ngOnInit(): void {
  }

  save() : void {
    console.log(this.productEntryForm.value);
  }

  addItem() : void{    
    let itemGroup = this.formBuilder.group(new Item());
    (<FormArray>this.productEntryForm.controls['items']).push(itemGroup);
  }

}
