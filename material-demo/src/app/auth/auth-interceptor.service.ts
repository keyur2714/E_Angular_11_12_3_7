import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Inside Interceptor...!"+sessionStorage.getItem("usertoken"));
    let token = sessionStorage.getItem("usertoken");
    if(token !== null && token !== undefined){
      req = req.clone(
        {
          headers : req.headers.set('Authorization', 'Bearer ' + token)
        }
      );
    }
    return next.handle(req).pipe(
      //after response      
    );
  }
}
