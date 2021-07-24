import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { ValidateDirctive } from './directive/validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    ValidateDirctive    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
