import { ArticleInterface } from 'src/app/shared/modules/feed/types/article.interface'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
