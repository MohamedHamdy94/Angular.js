import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Card} from '../interfaces/card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
   dImg="https://www.certificate.digital/images/resize/resizing.png"
@Input() card : Card = {
  "id": 1,
  "title":"",
  "link":"" ,
  "keywords": [],
  "creator": [],
  "description":"",
  "pubDate":"" ,
  "image_url":"",
  "country": [],
  "category": [],
  "language":"" 
} ;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  showDetails(){
this.router.navigate(['/Details',this.card['id']])
console.log(this.card['id'])
  }
}
