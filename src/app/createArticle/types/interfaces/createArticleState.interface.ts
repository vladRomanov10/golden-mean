import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
