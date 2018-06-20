import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HitokotoService {

  private url = 'https://v1.hitokoto.cn/';

  constructor(private http: HttpClient) { }

  /**
   * 获取一言
   *
   * @returns {Observable<any>} 一言
   */
  getHitokoto(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        catchError(this.handleError('getHitokoto', []))
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
