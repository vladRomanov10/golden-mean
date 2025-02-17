import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>(),
)
