import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';

const routes: Routes = [
  {path : 'home',component : HomeComponent},
  {path : 'about-us',component : AboutusComponent},
  {path : 'contact-us',component : ContactusComponent},
  {
    path : 'manage-students',component : ManageStudentsComponent,
    children : [
      {
        path : 'student-details/:id/:name',component : StudentDetailComponent
      }
    ]
  },
  {path : 'student-entry',component : StudentEntryComponent},
  {path : 'student-detail/:id/:name',component : StudentDetailComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRouting Module Object Created....!");
  }
}
