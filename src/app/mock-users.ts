import { User } from './user';
import {Post} from './post';
import { PostList } from './mock-posts';



export let user1: User[] = [
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
        posts:this.PostList[0]
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