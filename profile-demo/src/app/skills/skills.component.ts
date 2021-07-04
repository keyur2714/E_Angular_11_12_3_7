import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = new Skill();
    skill1.category = "Database";
    skill1.skillSets = ["MySql","Oracle","Mongo DB"];

    let skill2 = new Skill();
    skill2.category = "Language";
    skill2.skillSets = ["C","C++","Java","Type Script"];

    let skill3 = new Skill();
    skill3.category = "Tools";
    skill3.skillSets = ["Eclipse","Maven","VS Code"];

    let skill4 = new Skill();
    skill4.category = "Servers";
    skill4.skillSets = ["Tomcat","JBoss","NODE"];

    this.skills = [skill1,skill2,skill3,skill4];
  }

}
