import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUsernameRight = true;
  isPasswordRight = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUsername(username) {
    this.isUsernameRight = username.length >= 4;
  }

  checkPassword(password) {
    this.isPasswordRight = password.length >= 6;
  }
}
