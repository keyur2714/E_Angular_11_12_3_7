import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent,
    PersonListComponent,
    CourseListComponent,
    MyDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
