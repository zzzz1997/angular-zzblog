import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  private url = 'https://res.zzzz1997.com/md/agreement.md';
  convertedData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAgreement();
  }

  private getAgreement(): void {
    this.http.get(this.url, {responseType: 'text'})
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
        });
        this.convertedData = marked(data.toString());
      }, error => {
        console.error(error);
      });
  }
}
