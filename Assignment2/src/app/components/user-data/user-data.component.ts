import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/modules/user/user.module';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  users:UserModule[]=[];
  inputName:string = "";
  inputPhone:string = "";
  
  constructor() { }

  ngOnInit(): void {
 
  }

  addUser () {
    this.users.push({
      name: this.inputName,
      phone: this.inputPhone
    });

    this.inputName= "";
    this.inputPhone= "";
  }

}
