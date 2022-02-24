import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

@Output() todoData  = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

handleTodo(val:any){
  console.log(val)
  this.todoData.emit(val)
}
}
