import {Post} from './post';
import {User} from './user';
import {Like} from './like';

export let PostList:Post[] = [];
export let likes: Like[] = [];

export const user1: User[] = [
    {
        id: 1,
        name: "Alfredo",
        password: "1234",
        posts:undefined
    },
    {
        id: 2,
        name: "DIONE",
        password: "1234",
        //realizo el post id 1 los gatos
        posts:PostList[0]
    },
    {
        id: 3,
        name: "AJAX",
        password: "1234",
        posts:undefined
    },
    {
        id: 4,
        name: "EVAN",
        password: "1234",
        posts:undefined
    },
    {
        id: 5,
        name: "ANTHEA",
        password: "1234",
        posts:undefined
    },
    {
        id: 6,
        name: "EUPHROSYNE",
        password: "1234",
        posts:undefined
    }
];
likes = [
    {
        idUser: user1[2],
        idPost: 1,
        tipo: "Super Like"
    },
    {
        idUser: user1[0],
        idPost: 1,
        tipo: "Me encanta"
    },
    {
        idUser: user1[1],
        idPost: 2,
        tipo: "Me divierte"
    },
    {
        idUser: user1[3],
        idPost: 2,
        tipo: "Super Like"
    }
];

  PostList = [{
  id: 1,
  titulo: "Gatos del espacio",
  //lo realizo el usuario id 2 DIONE
  idAutor: user1[1],
  contenido: "Los gatos no tienen 9 vidas en el espacio, tienen 4",
  idLikes:likes
},{
    id: 2,
    titulo: "Perros en el espacio",
    //lo realizo el usuario id 2 DIONE
    idAutor: user1[3],
    contenido: "Laika ):",
    idLikes:likes
  }];



  
