import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseEntryComponent,
    PersonEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
