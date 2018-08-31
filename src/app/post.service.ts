import { Injectable } from '@angular/core';
import {Post} from './post';
import {PostList , likes} from './mock-posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(): Observable<Post[]>{
    return of (PostList);
  }

  getPost(id: number): Observable<Post> {
    // TODO: send the message _after_ fetching the hero
    return of(PostList.find(post => post.id === id));
  }
  
  constructor() { }
}
