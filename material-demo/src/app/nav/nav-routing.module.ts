import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { StudentDetailComponent } from "../student-detail/student-detail.component";
import { StudentEntryComponent } from "../student-entry/student-entry.component";
import { StudentListComponent } from "../student-list/student-list.component";
import { NavComponent } from "./nav.component";

const routes : Routes = [
    {    //below is for Eager Loading
        // path : 'home',component : NavComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],    
        path : '',component : NavComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],    
        children : [      
            {path : 'dashboard',component : DashboardComponent},
            {path : 'student-list',component : StudentListComponent},
            {path : 'student-entry',component : StudentEntryComponent},
            {path : 'student-update/:id',component : StudentEntryComponent},
            {path : 'student-detail/:id',component : StudentDetailComponent}
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class NavRoutingModule{
    constructor(){
        console.log("Nav Routing Module Object Created...!");
    }
}