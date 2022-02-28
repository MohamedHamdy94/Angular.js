import { Component, OnInit,Input, Output } from '@angular/core';
import {Router} from '@angular/router';
import {Card} from '../interfaces/card';
import { CounterService } from '../services/counter.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
  @Input() card : any ;
  counter : any;
  constructor(private router : Router,private CounterService :CounterService ,private productsarvice: ProductsService ) { }

    ngOnInit(): void {
    }
        inCounter(){
      this.CounterService.setCounterValue(++this.counter)
    }

  showDetails(){
this.router.navigate(['/Details',this.card['id']])
// console.log(this.card['id'])
  }
}
