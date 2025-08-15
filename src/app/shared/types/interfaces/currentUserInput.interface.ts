import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string
}
