import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  icon = 'https://res.zzzz1997.com/image/blog-icon/default_icon.png';
  isUsernameRight = true;
  isPasswordRight = true;
  isPasswordEqually = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  changeIcon() {
    this.icon = 'https://res.zzzz1997.com/image/blog-icon/zzzz_icon.jpg';
  }

  checkUsername(username) {
    this.isUsernameRight = username.length >= 4;
  }

  checkPassword(password) {
    this.isPasswordRight = password.length >= 6;
  }

  checkPasswordEqually(password, passwordAgain) {
    this.isPasswordEqually = password === passwordAgain;
  }
}
