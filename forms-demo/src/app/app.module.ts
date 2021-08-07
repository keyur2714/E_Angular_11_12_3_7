import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseEntryComponent,
    PersonEntryComponent,
    ItemEntryComponent
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
