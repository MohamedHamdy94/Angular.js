import { Component, OnInit } from '@angular/core';
import List from '../../assets/blogs.json';
import {Card} from '../interfaces/card';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
list : Card[] = List  ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
