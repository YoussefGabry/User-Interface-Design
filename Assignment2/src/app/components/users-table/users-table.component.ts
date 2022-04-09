import { Component, OnInit , Input} from '@angular/core';
import { UserModule } from 'src/app/modules/user/user.module';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() fetchedUsers:UserModule[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  
  deleteUser (id:number) {
    this.fetchedUsers = this.fetchedUsers.filter((v, i) => i !== id);
  }

}
