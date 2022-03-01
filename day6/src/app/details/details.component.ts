import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Lists from '../../assets/blogs.json';
import {Card} from '../interfaces/card';
import { ProductsService } from '../services/products.service';
// import { cards } from '../product-list/product-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  card :any  ;
  // Lists:any;
  cards :any  ;
  
  constructor(private active :ActivatedRoute ,   private productsarvice: ProductsService) {
    // const ActiveId = this.active.snapshot.params['id']
    // this.card=this.cards.find((iid:any) => iid.id == ActiveId)

    // console.log(this.card)
  }

  ngOnInit(): void {
    // this.productsarvice.gitproducts().subscribe(val => this.cards=val);
    // const ActiveId = this.active.snapshot.params['id'];
    // this.card=this.cards.find((iid:any) => iid.id == ActiveId)
  }

}
