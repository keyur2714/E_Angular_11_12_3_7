import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(n1 : string,n2: string) : void {
    //alert("Hello From... + "+n1+" "+n2)
    let sum = parseInt(n1) + parseInt(n2);
    //alert(sum);
    this.result = sum;
  }

  sub(n1 : string,n2 : string) : void {
    let sub = parseInt(n1) - parseInt(n2);
    this.result = sub;
  }

  mul(n1 : string,n2 : string) : void {
    let mul = parseInt(n1) * parseInt(n2);
    this.result = mul;
  }

  div(n1 : string,n2 : string) : void {
    let num2 : number = parseInt(n2);
    if(num2 === 0){
      this.result = 0;
      alert("Divide By Zero is not possible...!");      
    }else{
      let div = parseInt(n1) / parseInt(n2);
      this.result = div;
    }
    
  }
}
