import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'http://localhost:3000/user';
  private userUrl = 'https://api.zzzz1997.com/user';

  constructor(private http: HttpClient) { }

  /**
   * 判断用户名是否存在
   *
   * @param username 用户名
   * @returns {Observable<any>} 返回信息
   */
  isUserExist(username): Observable<any> {
    return this.http.get(this.userUrl + '/isExist/' + username)
      .pipe(
        catchError(this.handleError('isUserExist', []))
      );
  }

  /**
   * 注册用户
   *
   * @param username 用户名
   * @param password 用户密码
   * @param createdAt 创建时间
   * @returns {Observable<any>} 返回信息
   */
  register(username, password, createdAt): Observable<any> {
    const body = {
      username: username,
      password: password,
      createdAt: createdAt
    };
    return this.http.post(this.userUrl + '/register', body)
      .pipe(
        catchError(this.handleError('register', []))
      );
  }

  /**
   * 用户登录
   *
   * @param username 用户名
   * @param password 用户密码
   * @returns {Observable<any>} 返回信息
   */
  login(username, password): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    return this.http.post(this.userUrl + '/login', body)
      .pipe(
        catchError(this.handleError('login', []))
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
