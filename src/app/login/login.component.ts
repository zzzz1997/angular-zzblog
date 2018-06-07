import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {CookieOptions, CookieService} from 'ngx-cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  TIMEOUT = 10;

  isUsernameRight = true;
  isPasswordRight = true;
  isVerificationRight = true;

  verification = '';

  constructor(private userService: UserService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  checkUsername(username) {
    this.isUsernameRight = username.length >= 4;
  }

  checkPassword(password) {
    this.isPasswordRight = password.length >= 6;
  }

  checkVerification(verification) {
    this.isVerificationRight = verification.length === 4;
  }

  loginUser(username, password, verification, verificationComponent) {
    if (!this.isUsernameRight) {
      alert('请输入正确的用户名');
      verificationComponent.changeVerification();
      return;
    }
    if (!this.isPasswordRight || password.length < 6) {
      alert('请输入正确的密码');
      verificationComponent.changeVerification();
      return;
    }
    if (verification.toUpperCase() !== this.verification.toUpperCase()) {
      alert('验证码不正确');
      verificationComponent.changeVerification();
      return;
    }

    this.userService.login(username, password)
      .subscribe(data => {
        if (data.success) {
          const user: User = data.data.user;
          const token = data.data.token;
          const date = new Date();
          date.setMinutes(date.getMinutes() + this.TIMEOUT);
          const options: CookieOptions = {
            expires: date
          };
          this.cookieService.putObject('user', user, options);
          this.cookieService.put('token', token, options);
          this.router.navigateByUrl('home');
        } else {
          alert(data.message);
          verificationComponent.changeVerification();
        }
      });
  }

  onVerificationNotify(message: string) {
    this.verification = message;
  }
}
