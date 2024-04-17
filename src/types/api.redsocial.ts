export interface Post {
  user: User
  image: string
  caption: string
  created_at: string
}

export interface User {
  username: string
  first_name: string
  last_name: string
  profile_image: string
}