import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [  
  {path : '' , component : LoginComponent},
  {path : 'login',component : LoginComponent},   
  {path : 'logout',component : LogoutComponent},
  {path : 'home' , loadChildren : () => import('./nav/nav.module').then(n=>n.NavModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(){
    console.log("App Routing Module Object Created...!");
  }

}
