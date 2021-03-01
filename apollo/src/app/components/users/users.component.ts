import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm() {
    this.usersForm = this.fb.group({
      email: ['', [Validators.required]],
      age: ['', [Validators.required]]
    })
  }

  saveFormData(){
    const userData = this.usersForm.value;
    this.usersService.loadUser(userData).subscribe(user => console.log(user));
    
    this.usersForm.reset();
  }

}
