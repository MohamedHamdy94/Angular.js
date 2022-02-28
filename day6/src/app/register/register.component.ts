import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registForm : FormGroup
  constructor() {
    this.registForm = new FormGroup({
      Name : new FormControl('',[Validators.required,Validators.minLength(4)]),
      userName : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[^\s]+')]),
      userEmail : new FormControl('',[Validators.required,Validators.email]),
      Password: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
      repeatPassword: new FormControl('',[Validators.required,]),
    })
  }
get formControls(){
return this.registForm.controls;
}
// set formControls(){

// }
  ngOnInit(): void {
  }
  submitRegistForm(){

  }
}
