import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myName:string = 'Mohamed Hamdy Ahmed';
job:string = 'full stack developer';
  constructor() { }

  ngOnInit(): void {
  }

}
