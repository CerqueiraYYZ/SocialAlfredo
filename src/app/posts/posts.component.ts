import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {User} from '../user';
import {PostList} from '../mock-posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts = PostList;


  constructor() { }

  ngOnInit() {
  console.log(this.posts);
    
  }

}
