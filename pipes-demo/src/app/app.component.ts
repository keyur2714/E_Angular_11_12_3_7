import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipes-demo';

  firstName : string = 'Keyur';
  lastName : string = 'Thakor';
  dateOfBirth : Date = new Date("1986-12-27");
  salary : number = 10000;
  seqNo : number = 0;

  mobileNo : string='7387029671';
  accountNo : string = '12345123121';

  course = {
    "id":123,
    "courseCode":"ANG",
    "courseName":"Angular",
    "fees":13800
  }

  numberObservable = interval(1000);

  ngOnInit(){
    // this.numberObservable.subscribe(
    //   (n)=>{
    //     this.seqNo = n;
    //   }
    // )
  }

}
