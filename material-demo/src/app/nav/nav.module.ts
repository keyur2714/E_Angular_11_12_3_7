import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "../app-routing.module";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MaterialModule } from "../material.module";
import { StudentDetailComponent } from "../student-detail/student-detail.component";
import { StudentEntryComponent } from "../student-entry/student-entry.component";
import { StudentListComponent } from "../student-list/student-list.component";
import { NavRoutingModule } from "./nav-routing.module";
import { NavComponent } from "./nav.component";

@NgModule({
    declarations : [
        NavComponent,
        StudentListComponent,
        DashboardComponent,
        StudentEntryComponent,
        StudentDetailComponent,
    ],
    imports : [
        CommonModule,
        NavRoutingModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers : []
})
export class NavModule{
    constructor(){
        console.log("Nav Module Object Created...");
    }
}