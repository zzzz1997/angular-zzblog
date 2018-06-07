import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  isVerificationRight = true;

  verification = '';

  constructor(private userService: UserService,
        private router: Router) { }

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

  checkVerification(verification) {
    this.isVerificationRight = verification.length === 4;
  }

  registerUser(username, password, passwordAgain, verification, agree, verificationComponent) {
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
    if (!this.isPasswordEqually || password !== passwordAgain) {
      alert('两次密码不一致');
      verificationComponent.changeVerification();
      return;
    }
    if (verification.toUpperCase() !== this.verification.toUpperCase()) {
      alert('验证码不正确');
      verificationComponent.changeVerification();
      return;
    }
    if (!agree) {
      alert('确认注册前请同意用户协议！');
      verificationComponent.changeVerification();
      return;
    }

    this.userService.isUserExist(username)
      .subscribe(data => {
        if (!data.success) {
          const date = new Date();
          this.userService.register(username, password, date.getFullYear() +
            '-' + (date.getMonth() + 1) + '-' + date.getDate())
            .subscribe(data1 => {
              if (data1.success) {
                console.log(data1);
                alert('注册成功！您是本站第' + data1.data.id + '个注册用户');
                this.router.navigateByUrl('login');
              } else {
                alert('注册失败');
                verificationComponent.changeVerification();
              }
            });
        } else {
          alert('用户名已存在');
          verificationComponent.changeVerification();
        }
      });
  }

  onVerificationNotify(message: string) {
    this.verification = message;
  }
}
