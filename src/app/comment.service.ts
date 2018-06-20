import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'http://localhost:3000/comment';

  constructor(private http: HttpClient) { }

  /**
   * 获取文章评论
   *
   * @returns {Observable<Comment[]>} 评论列表
   */
  getComments(articleId): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + '/' + articleId)
      .pipe(
        catchError(this.handleError('getComments', []))
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
