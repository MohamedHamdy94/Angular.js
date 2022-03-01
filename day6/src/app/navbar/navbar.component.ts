import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter = 0
  constructor( private Counterserver : CounterService) { }

  ngOnInit(): void {
    this.Counterserver.getCounterValue().subscribe((val) => this.counter = val);
  }

}
