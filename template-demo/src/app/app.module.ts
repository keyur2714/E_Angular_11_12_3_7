import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
import { ResultComponent } from './result/result.component';
import { StringUtilComponent } from './string-util.component';
import { StringOperationsComponent } from './string-operations/string-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    ResultComponent,
    StringUtilComponent,
    StringOperationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
