import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { ValidateDirctive } from './directive/validate.directive';
import { MyIfDirective } from './my-if.directive';
import { MyLoopDirective } from './my-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    ValidateDirctive,
    MyIfDirective,
    MyLoopDirective    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
