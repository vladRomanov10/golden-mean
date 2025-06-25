import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
