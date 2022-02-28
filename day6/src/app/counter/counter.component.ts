import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
counter =0
  constructor(private CounterService :CounterService ) { }

  ngOnInit(): void {
    this.CounterService.getCounterValue().subscribe(
      (val)=>(this.counter=val)
    );
  }
  inCounter(){
    this.CounterService.setCounterValue(++this.counter)
  }

}
