import { ArticleCommentInterface } from 'src/app/shared/types/articleComment.interface'

export interface ArticleInterface {
  id: number
  slug: string
  title: string
  description: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: string[]
  author: {
    id: 268
    username: 'henryju'
    bio: ''
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg'
    following: false
  }
  favoritesCount: number
  comments?: ArticleCommentInterface[]
  favorited: boolean
}
