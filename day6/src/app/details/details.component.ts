import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Lists from '../../assets/blogs.json';
import { Card } from '../interfaces/card';
import { ProductsService } from '../services/products.service';
// import { cards } from '../product-list/product-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  card: any;
  // ActiveId :any;
  constructor(
    private active: ActivatedRoute,
    private productsarvice: ProductsService
  ) {
    // this.ActiveId = this.active.snapshot.params['id']
  }

  ngOnInit(): void {
    // const ActiveId = this.active.snapshot.params['id'];
    const ActiveId = this.active.snapshot.paramMap.get('id');

    this.productsarvice.gitproductsById(ActiveId).subscribe((val: any) => {
      this.card = val;
      console.log(val);
    });

    // this.productsarvice.gitproductsById(this.ActiveId).subscribe((val :any) => this.card = val);
    console.log(ActiveId);

    console.log(this.card);
  }
}
