import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { CurrentUserInputInterface } from 'src/app/shared/types/interfaces/currentUserInput.interface'

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>(),
)

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
)

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
)
