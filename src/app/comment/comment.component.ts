import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  articleId: number;

  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  private getComments() {
    this.commentService.getComments(this.articleId)
      .subscribe(data => {
        this.comments = data['data'];
      }, (error) => {
        console.error(error);
      });
  }
}
