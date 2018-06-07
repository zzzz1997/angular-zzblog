import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as marked from 'marked';
import * as highlight from 'highlight.js';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { User } from '../user';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  author: User;
  convertedData;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
  }

  private getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => {
        this.article = article['data']['article'];
        this.author = article['data']['author'];
        this.getConvertedData();
      }, error => {
        console.error(error);
      });
  }

  private getConvertedData(): void {
    this.articleService.getMarkDown(this.article.url)
      .subscribe(data => {
        const rendererMD = new marked.Renderer();
        marked.setOptions({
          renderer: rendererMD,
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          // codeClassPrefix: '',
        });
        marked.setOptions({
          /*highlight: function (code) {
            return highlight.highlightAuto(code).value;
          },*/
        });
        this.convertedData = marked(data.toString());
      }, error => {
        console.error(error);
      });
  }
}
