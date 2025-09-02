import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/userProfile/store/actionTypes'

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>(),
)
