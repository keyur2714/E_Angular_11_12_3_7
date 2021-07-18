import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  isEligibile : string = '';  

  @ViewChild("nm")
  name : ElementRef;

  @ViewChild("a")
  age : ElementRef;

  @ViewChild("msg",{static : true})
  msg : ElementRef;

  constructor() { }

  ngOnInit(): void {
    //alert(this.msg.nativeElement.innerHTML);
    console.log(this.msg.nativeElement.innerHTML);
    this.msg.nativeElement.style.fontSize = '35px';
    this.msg.nativeElement.style.color = 'green';
    this.msg.nativeElement.style.border = '5px solid yellow';
  }

  checkEligibility() : void{

    this.age.nativeElement.style.color = '';
    this.age.nativeElement.style.background = '';
    
    let name : string = this.name.nativeElement.value;
    let age : string = this.age.nativeElement.value;

    let ag : number = parseInt(age);
    
    if (! isNaN(ag)){      
      if(ag >= 18)
        this.isEligibile = "true";
      else
        this.isEligibile = "false";      
    }else{
      this.age.nativeElement.value = "Please Enter Age : ";
      this.age.nativeElement.style.color = 'yellow';
      this.age.nativeElement.style.background = 'red';
      
    }      
  }
}
