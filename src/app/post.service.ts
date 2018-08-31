import { Injectable } from '@angular/core';
import { Post } from './post';
import { User } from './user';
import { PostList, likes,user1 } from './mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/PostList'; 

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
      catchError(this.handleError('getPosts', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions).pipe(
      catchError(this.handleError<any>('updatePost'))
    );
  }

  // getPost(id: number): Observable<Post> {
  //   // TODO: send the message _after_ fetching the hero
  //   return of(PostList.find(post => post.id === id));
  // }

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

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** POST: add a new hero to the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
      catchError(this.handleError<Post>('addPost'))
    );
  }
/* GET heroes whose name contains search term */
searchPosts(term: string): Observable<Post[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Post[]>(`${this.postsUrl}/?titulo=${term}`).pipe(
    catchError(this.handleError<Post[]>('searchPosts', []))
  );
}

  
}
