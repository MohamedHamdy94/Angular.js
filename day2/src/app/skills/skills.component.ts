import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any =[
    {
      name:"HTML",
      rang: "90%"
    },
    {
      name:"CSS",
      rang: "60%"
    },
    {
      name:"Bootstrap",
      rang: "80%"
    },
    {
      name:"Java Script",
      rang: "50%"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
