import { Post } from './post';
import { User } from './user';
import { Like } from './like';
import { user1 } from './mock-users';
import { PostList } from './mock-posts';

export const like: Like[] = [
    {
        user: user1[0],
        post: PostList[0],
        tipo: "Super Like"
    },
    {
        user: user1[2],
        post: PostList[0],
        tipo: "Me encanta"
    },
    {
        user: user1[1],
        post: PostList[0],
        tipo: "Me divierte"
    },
    {
        user: user1[3],
        post: PostList[0],
        tipo: "Super Like"
    }
];