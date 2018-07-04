import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie';
import { HitokotoService } from './hitokoto.service';
import { Hitokoto } from './hitokoto';
import {User} from './user';

const defaultNavs = [
  {name: '主页', tag: 'home'},
  {name: '写博客', tag: 'write'},
  {name: '登录', tag: 'login'}
];

const loginedNavs = [
  {name: '主页', tag: 'home'},
  {name: '写博客', tag: 'write'},
  {name: '登录', tag: 'login', items: [
      {name: '个人中心', tag: 'hh'},
      {name: '退出登录', tag: 'hhhh'}
    ]}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navs = [];

  types = [
    {code: 'a', text: '动画'},
    {code: 'b', text: '漫画'},
    {code: 'c', text: '游戏'},
    {code: 'd', text: '小说'},
    {code: 'e', text: '原创'},
    {code: 'f', text: '来自网络'},
    {code: 'g', text: '其他'}
  ];

  currentNav = {tag: 'default'};

  hitokoto: Hitokoto = null;

  constructor(private location: Location,
              private hitokotoService: HitokotoService,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.initView();
  }

  private initView(): void {
    this.findLogin();
    this.getNowPage();
    this.getHitokoto();
  }

  private findLogin() {
    if (!this.getCookie('token')) {
      this.navs = defaultNavs;
    } else {
      this.navs = loginedNavs;
      this.navs[2].name = (<User>this.getCookieObject('user')).username;
    }
  }

  private getNowPage() {
    for (const nav of this.navs) {
      if (this.location.path().replace('/', '') === nav.tag) {
        this.currentNav = nav;
        break;
      }
    }
  }

  private getHitokoto() {
    this.hitokotoService.getHitokoto()
      .subscribe(data => {
        this.hitokoto = data;
        for (const type of this.types) {
          if (this.hitokoto.type === type.code) {
            this.hitokoto.text = type.text;
            break;
          }
        }
      }, (error) => {
        console.error(error);
      });
  }

  private getCookie(key: string) {
    return this.cookieService.get(key);
  }

  private getCookieObject(key: string) {
    return this.cookieService.getObject(key);
  }
}
