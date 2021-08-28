import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm = this.fb.group({    
    userEmailId: [null,[Validators.required,Validators.email]],
    userPassword: [null, [Validators.required,Validators.minLength(3)]],        
  });

  constructor(private authService : AuthService,private fb : FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      let userName = this.loginForm.controls['userEmailId'].value;
      let password = this.loginForm.controls['userPassword'].value;
      this.authService.authenticate(userName,password).subscribe(
        (user : User)=>{
          if(user === undefined){
            alert("Invalid Username or Password.");
          }else{
            console.log(JSON.stringify(user));
            sessionStorage.setItem("username",user.username);
            sessionStorage.setItem("usertoken",user.token);
            sessionStorage.setItem("userrole",user.role);
            this.router.navigate(['/home/dashboard']);
          }          
        },
        (error)=>{

        }
      )
    }
  }
}
