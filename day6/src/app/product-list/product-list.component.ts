import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import List from '../../assets/blogs.json';
import {Card} from '../interfaces/card';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
list : any ;
// console.log(list)
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.gitproducts().subscribe(
      (res : any) => this.list= res     
    // console.log(res)
    // (error)=>{console.log(error)
    // }
    )

  }

}
