import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  private loadUser(){
    this.usersService.loadUser({createUserData: {email: "qweqw@qwe", age: 21}}).subscribe(value => console.log(value));
  }

}
