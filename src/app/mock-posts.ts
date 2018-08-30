import {Post} from './post';
import {User} from './user';
import {user1} from './mock-users';
import {like} from './mock-likes';

export const PostList: Post [] = [{
  id: 1,
  titulo: "Gatos del espacio",
  autor: user1[0],
  contenido: "Los gatos no tienen 9 vidas en el espacio, tienen 4",
  likes:like
}];