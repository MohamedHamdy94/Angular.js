import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-cards',
  templateUrl: './next-cards.component.html',
  styleUrls: ['./next-cards.component.css']
})
export class NextCardsComponent implements OnInit {
  cards =[1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
