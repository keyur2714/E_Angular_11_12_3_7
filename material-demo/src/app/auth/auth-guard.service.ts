import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{

  constructor(private authService : AuthService,private router : Router) { }
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    //alert("Hi");
    let url = route.url;
    let stateUrl = state.url;
    alert(url);
    //alert(state.url);    
    if(this.authService.isLoggedIn){
      return true;
    }else{
      this.router.navigate(['/login']);
    }
    return;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    alert(sessionStorage.getItem("userrole"));
    let currentUser = sessionStorage.getItem("userrole");
    if(currentUser === 'USER'){
      alert("Sorry but you do not have permission for this action.");
      return false;
    }
    return true;
  }
}
