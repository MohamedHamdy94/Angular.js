import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent implements OnInit {
  ProtfolioSkills: any =[
    {
      name:"HTML",
      istrue : true
    },
    {
      name:"CSS",
      istrue : false
    },
    {
      name:"Bootstrap",
      istrue : true
    },
    {
      name:"Java Script",
      istrue : false
    },
    {
      name:"Angular",
      istrue : true
    },
    {
      name:"Sass",
      istrue : false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
