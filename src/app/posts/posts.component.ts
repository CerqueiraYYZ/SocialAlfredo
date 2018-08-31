import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {User} from '../user';
import {PostList , likes} from '../mock-posts';
import {user1} from '../mock-users';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Like } from 'src/app/like';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Post[];
selectedPost: Post;


onSelect(post: Post): void {
  let listaDeLikes:Like[]=[];
  
  for (let index = 0; index < likes.length; index++) {
    const element = likes[index];
    //console.log(post.idLikes[index].idUser.id+"  "+element);
    if(post.id == element.idPost){
      listaDeLikes.push(element);
    }
  }

  post.idLikes = listaDeLikes;

  this.selectedPost = post;
}

//likes del post

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  add(titulo: string,contenido:string): void {
    titulo = titulo.trim();
    if (!titulo) { return; }
    this.postService.addPost({ id:undefined,titulo,contenido,idAutor:undefined,idLikes:undefined } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }
}
