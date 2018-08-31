import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { PostList, likes,user1 } from './mock-posts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/user1';
  userLogged:User;
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
      catchError(this.handleError('getUsers', []))
      );
  }
  
  logUser(user:User){
    this.userLogged = user;
  }

  unLogUser(){
    this.userLogged = undefined;
  }
}
