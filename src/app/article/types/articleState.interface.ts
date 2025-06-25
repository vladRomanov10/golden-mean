import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  error: BackendErrorsInterface | null
  data: ArticleInterface | null
}
