import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    EducationDetailComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Object Created...!");
  }
}
