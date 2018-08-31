import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {User} from '../user';
import {PostList , likes} from '../mock-posts';
import {user1} from '../mock-users';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Like } from 'src/app/like';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
posts: Post[];
users: User[];
selectedPost: Post;
likesNuevo:Like[] = [];

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

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  add(titulo: string,contenido:string): void {
    if(this.userService.userLogged){
    titulo = titulo.trim();
    if (!titulo) { return; }
    this.postService.addPost({ id:this.posts.length+1,titulo,contenido,idAutor:this.userService.userLogged,idLikes:this.likesNuevo } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
    }else{
      console.log("You have to login!");
    }
  }
}
