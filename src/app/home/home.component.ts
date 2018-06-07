import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getTopList();
  }

  private getTopList(): void {
    this.articleService.getTopList()
      .subscribe((data) => {
        this.articles = data['data']['articles'];
      }, (error) => {
        console.error(error);
      });
  }
}
