import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout.component';
import { NavComponent } from './nav/nav.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [  
  {path : '' , component : LoginComponent},
  {path : 'login',component : LoginComponent},   
  {path : 'logout',component : LogoutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(){
    console.log("App Routing Module Object Created...!");
  }

}
