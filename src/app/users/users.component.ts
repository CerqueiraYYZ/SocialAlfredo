import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 loggedOut:boolean = true;
 loggedIn:boolean = false;
 name:string;
 password:string;
 users:User[];

 constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  login(){
    this.users.forEach(element => {
      if(element.name == this.name && element.password == this.password){
        this.loggedOut = false;
        this.loggedIn = true;
      }
    });
  }

  logout(){
      this.loggedOut = true;
      this.loggedIn = false;
  }

}
