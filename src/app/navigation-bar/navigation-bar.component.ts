import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  showAbout: boolean=false;
  showExperience:boolean=false;
  showHeading:boolean=true;
  showProjects:boolean=false;
  showSkillsAndProficiency: boolean=false;
  showContact:boolean=false;
  //skills1={{name:"Angular",percentile:90},Dot_Net:80,SQL_and_NoSQL:95,Object_Oriented_Programming:100,Java_C};
  skills=[{
    name:"Angular, JavaScript/TypeScript",
    percentile:90
  },
  {
    name:"Spring Boot, Java, RESTful Web Services ",
    percentile:80
  },
  {
    name:'.Net & C#',
    percentile:80
  },
  {
    name:"SQL & NoSQL",
    percentile:90
  },
  {
    name:"Firebase-DB, Storage & Cloud Functions",
    percentile:90
  },
  {
    name:"HTML, CSS/BootStrap",
    percentile:75
  },
  {
    name:"Object Oriented Programming",
    percentile:100
  },
  {
    name:"Swift & iOS application development",
    percentile:80
  },
  {
    name:"SDLC, Agile, SCRUM, Version Control, CI/CD Pipeline, Unit Testing",
    percentile:90
  },
]
  constructor(private route: Router) {

   }

  ngOnInit() {
  }
  about(){
    this.showAbout=true;
    this.showHeading=false;
    this.showExperience=false;
    this.showProjects=false;
    this.showContact=false;
    this.showSkillsAndProficiency=false;
    document.documentElement.scrollTop = 0;
  }
  experience(){
    this.showExperience=true;
    this.showHeading=false;
    this.showAbout=false;
    this.showProjects=false;
    this.showContact=false;
    this.showSkillsAndProficiency=false;
    document.documentElement.scrollTop = 0;

  }
  project(){
    this.showProjects=true;
    this.showExperience=false;
    this.showHeading=false;
    this.showAbout=false;
    this.showContact=false;
    this.showSkillsAndProficiency=false;
    document.documentElement.scrollTop = 0;
  }
  open(url) {
    console.log(url);
    window.open(url, "_blank");
  }
  skillsAndProficiency(){
    this.showProjects=false;
    this.showExperience=false;
    this.showHeading=false;
    this.showAbout=false;
    this.showContact=false;
    this.showSkillsAndProficiency=true;
    document.documentElement.scrollTop = 0;
  }
  showContactFun(){
    this.showProjects=false;
    this.showExperience=false;
    this.showHeading=false;
    this.showAbout=false;
    this.showSkillsAndProficiency=false;
    this.showContact=true;
    document.documentElement.scrollTop = 0;
  }
  home(){
    this.showProjects=false;
    this.showExperience=false;
    this.showHeading=true;
    this.showAbout=false;
    this.showSkillsAndProficiency=false;
    this.showContact=false;
    document.documentElement.scrollTop = 0;
  }
}
