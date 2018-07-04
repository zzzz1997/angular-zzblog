import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit, OnDestroy {

  private timer;

  time = 3;
  info = '';

  constructor(private route: ActivatedRoute,
              private cookieService: CookieService,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.operation();
    this.timer = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  private operation() {
    const state = +this.route.snapshot.paramMap.get('state');
    if (state === 0) {
      this.info = '登录成功';
    } else if (state === 1) {
      this.removeAllCookie();
      this.info = '退出登陆成功';
    } else {
      this.info = '未知操作';
    }
  }

  private countDown() {
    if (this.time === 0) {
      this.jumpHome();
    } else {
      this.time -= 1;
    }
  }

  private jumpHome() {
    this.router.navigate(['/home']);
    // this.location.go('home');
    this.ngOnDestroy();
  }

  private removeAllCookie() {
    this.cookieService.removeAll();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
