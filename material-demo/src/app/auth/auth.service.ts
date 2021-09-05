import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  isLoggedIn : boolean = false;

  appUrl : string = "http://localhost:3000/users";

  constructor(private httpClient : HttpClient) { }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.appUrl);
  }

  authenticate(userName : string,password : string) : Observable<User> {
    let user = new User(1,'keyurjava72@gmail.com','keyur','ADMIN','ABC');
    this.isLoggedIn = true;
    return of(user);
    // return this.getAllUsers().pipe(
    //   map(users=>{
    //     for(let user of users){          
    //       if(user.username === userName && user.password === password){            
    //         this.isLoggedIn = true;
    //         return user;
    //       }
    //     }        
    //   })
    // );
  }

}
