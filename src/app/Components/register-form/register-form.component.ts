import { Component, OnInit } from '@angular/core';

interface User{
  name:string;
  email:string;
  password:string;
  designation:string;
  bio:string;
  terms:boolean;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public users:User={
    name:"",
    email:"",
    password:"",
    designation:"",
    bio:"",
    terms:false
  }

  constructor() { }

  ngOnInit(): void {
  }
 public submitUser(){
 console.log(this.users)
 }
}
