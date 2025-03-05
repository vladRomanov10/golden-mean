import { YourFeedArticleInterface } from 'src/app/shared/modules/feed/types/yourFeedArticle.interface'

export interface GetYourFeedResponseInterface {
  articles: YourFeedArticleInterface
  articlesCount: number
}
