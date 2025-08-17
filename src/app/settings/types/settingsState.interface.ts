import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export interface SettingsStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
