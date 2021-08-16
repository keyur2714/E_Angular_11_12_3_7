import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path : 'dashboard',component : DashboardComponent},
  {path : 'student-list',component : StudentListComponent},
  {path : 'student-entry',component : StudentEntryComponent},
  {path : 'student-update/:id',component : StudentEntryComponent},
  {path : 'student-detail/:id',component : StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
