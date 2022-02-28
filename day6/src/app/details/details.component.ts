import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  Lists from '../../assets/blogs.json';
import {Card} from '../interfaces/card';
// import { cards } from '../product-list/product-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dImg="https://www.certificate.digital/images/resize/resizing.png"

  card = Lists  ;
  // Lists:any;
  list:any;

  constructor(private active :ActivatedRoute ) { 
    const ActiveId = this.active.snapshot.params['id']
    this.list=this.card.find((iid:any) => iid.id == ActiveId)
    // console.log(this.List)
  }

  ngOnInit(): void {
  }

}
