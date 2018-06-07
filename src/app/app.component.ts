import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navs = [
    {name: '主页', tag: 'home'},
    {name: '关于', tag: 'about'},
    {name: '联系我', tag: 'contact'},
    {name: '登录', tag: 'login'}
  ];

  currentNav = {tag: 'default'};

  constructor(private location: Location,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.initView();
  }

  private initView(): void {
    for (const nav of this.navs) {
      if (this.location.path().replace('/', '') === nav.tag) {
        this.currentNav = nav;
        break;
      }
    }
  }
}
