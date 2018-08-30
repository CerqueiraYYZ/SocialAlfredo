import {User} from './user';
import {Like} from './like';
export class Post {
    id: number;
    autor:User;
    titulo:string;
    contenido:string;
    likes:Like[];
  }