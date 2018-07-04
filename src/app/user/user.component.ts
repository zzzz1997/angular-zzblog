import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private currentUser: User;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  private getCurrentUser() {
    this.currentUser = <User>this.cookieService.getObject('user');
  }
}
