import { createAction } from '@ngrx/store'
import { ActionTypes } from 'src/app/auth/store/actionTypes'

export const logoutAction = createAction(ActionTypes.LOGOUT)

export const logoutSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS)

export const logoutFailureAction = createAction(ActionTypes.LOGIN_FAILURE)
