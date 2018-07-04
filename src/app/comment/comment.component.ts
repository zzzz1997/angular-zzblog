import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { User } from '../user';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  articleId: number;

  comments: Comment[] = [];

  private currentUser: User;

  constructor(private commentService: CommentService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.getComments();
    this.getCurrentUser();
  }

  private getComments() {
    this.commentService.getComments(this.articleId)
      .subscribe(data => {
        this.comments = data['data'];
      }, (error) => {
        console.error(error);
      });
  }

  private publishComment(content) {
    if (!this.currentUser) {
      alert('请先登录后评论!');
    } else {
      const date = new Date();
      this.commentService.publishComment(this.currentUser.id, this.articleId, content,
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
        .subscribe(data => {
          if (data.success) {
            alert('评论成功');
          } else {
            alert('评论失败');
          }
        });
    }
  }

  private getCurrentUser() {
    this.currentUser = <User>this.cookieService.getObject('user');
  }
}
