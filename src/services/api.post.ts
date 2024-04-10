import posts from '../db/posts.json'
import {type Post} from '../types/api.redsocial'

export const getPosts = async ():Promise<Array<Post>>=>{
 return await posts as Array<Post>
}