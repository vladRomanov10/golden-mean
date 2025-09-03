import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/userProfile/store/actionTypes'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>(),
)

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: UserProfileInterface }>(),
)

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE,
)
