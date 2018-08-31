import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Like } from '../like';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
@Input() post: Post;
  likeNow:Like;
  mensajeLogin:boolean = false;
  constructor(private userService: UserService,private postService: PostService ) { }

  ngOnInit() {
  }

  like(){
    if(this.userService.userLogged){
    this.post.idLikes.push(this.likeNow = { idUser:this.userService.userLogged,idPost:this.post.id,tipo:"Masive Like"});
    this.postService.updatePost(this.post )
      .subscribe();
      this.mensajeLogin = false;
    }else{
      this.mensajeLogin = true;
    }
  }
  
}
