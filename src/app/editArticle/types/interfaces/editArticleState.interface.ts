import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export interface EditArticleStateInterface {
  isLoading: boolean
  article: ArticleInterface | null
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
