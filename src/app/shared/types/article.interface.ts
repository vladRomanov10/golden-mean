import { ArticleCommentInterface } from 'src/app/shared/modules/feed/types/articleComment.interface'
import { ArticleAuthorInterface } from 'src/app/shared/modules/feed/types/articleAuthor.interface'

export interface ArticleInterface {
  id: number
  slug: string
  title: string
  description: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: string[]
  author: ArticleAuthorInterface
  favoritesCount: number
  favorited: boolean
  comments?: ArticleCommentInterface[]
}
