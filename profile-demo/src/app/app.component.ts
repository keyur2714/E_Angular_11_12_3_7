import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  msg : string = 'Hello Radhe Krishna...!'; //model/attribute/property
  name : string = 'Keyursinh Thakor';
  title : string = 'profile-demo';

  constructor(){
    console.log("App Component Object Created...!");
  }

  ngOnInit(){
    console.log("AppComponent Object Initialized...!");
  }
}
