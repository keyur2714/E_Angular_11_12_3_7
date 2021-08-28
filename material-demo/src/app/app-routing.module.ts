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
  {    
    path : 'home',component : NavComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],    
    children : [      
      {path : 'dashboard',component : DashboardComponent},
      {path : 'student-list',component : StudentListComponent},
      {path : 'student-entry',component : StudentEntryComponent},
      {path : 'student-update/:id',component : StudentEntryComponent},
      {path : 'student-detail/:id',component : StudentDetailComponent}
    ]
  }, 
  {path : 'logout',component : LogoutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
