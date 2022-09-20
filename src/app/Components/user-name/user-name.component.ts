import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  public userName:string="";
  public message:string="";
  public Maxlength:number=200;
  public showType:string="password"

  constructor() { }

  ngOnInit(): void {
  }
  update(event:any):void{
    this.userName=event.target.value;
  }
  public showPassword(event:any):void{
    if(event.target.checked){
      this.showType="text"
    }
    else{
      this.showType="password"
    }
  }

}
