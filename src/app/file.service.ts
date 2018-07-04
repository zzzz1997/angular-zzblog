import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = 'http://localhost:3000/file';

  constructor(private http: HttpClient) { }

  /**
   * 上传文件
   *
   * @returns {Observable<any>} 上传结果
   */
  upload(file): Observable<any> {
    const body = {
      file: file
    };
    return this.http.post(this.url + '/upload', body)
      .pipe(
        catchError(this.handleError('upload', []))
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
