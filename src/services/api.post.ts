import {type Post} from '../types/api.redsocial'
import fetchFromApi from './redSocial'

export const getPosts = async ():Promise<Post[]>=>{
 try {
  const res = await fetchFromApi('/api/posts?format=json')
 return res as Post[]
 } catch (error) {
  return []
 }
}