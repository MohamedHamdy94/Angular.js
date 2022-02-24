import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
todo:any;
  constructor() { }

  ngOnInit(): void {
  }
  sendTodo(event:any){
    console.log(event)
    this.todo=event
  }
}
