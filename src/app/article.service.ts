import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from './article';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  private topUrl = 'http://localhost:3000/article';
  // private topUrl = 'https://api.zzzz1997.com/article';

  constructor(private http: HttpClient) {
  }

  /**
   * 获取置顶文章列表
   *
   * @returns {Observable<Article[]>} 文章数组
   */
  getTopList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.topUrl + '/top', httpOptions)
      .pipe(
        catchError(this.handleError('getTopList', []))
      );
  }

  /**
   * 获取文章信息
   *
   * @returns {Observable<Article>} 文章
   */
  getArticle(id): Observable<any> {
    return this.http.get<any>(this.topUrl + '/id/' + id)
      .pipe(
        catchError(this.handleError('getArticle', []))
      );
  }

  /**
   * 获取MarkDown数据
   *
   * @param url md文件链接
   * @returns {Observable<any>} md文本内容
   */
  getMarkDown(url): Observable<any> {
    return this.http.get(url, {responseType: 'text'})
      .pipe(
        catchError(this.handleError('getMarkDown', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
