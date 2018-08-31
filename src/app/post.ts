import {User} from './user';
import {Like} from './like';

export class Post {
    id: number;
    idAutor:User;
    titulo:string;
    contenido:string;
    idLikes:Like[];
  }