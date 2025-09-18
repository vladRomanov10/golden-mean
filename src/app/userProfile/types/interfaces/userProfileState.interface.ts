import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export interface UserProfileStateInterface {
  isLoading: boolean
  data: UserProfileInterface | null
  error: string | null
}
