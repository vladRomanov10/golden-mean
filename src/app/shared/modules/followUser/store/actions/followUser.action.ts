import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/followUser/store/actionTypes'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

export const followUserAction = createAction(
  ActionTypes.FOLLOW_USER,
  props<{ slug: string }>(),
)

export const followUserSuccessAction = createAction(
  ActionTypes.FOLLOW_USER_SUCCESS,
  props<{ userProfile: UserProfileInterface }>(),
)

export const followUserFailureAction = createAction(
  ActionTypes.FOLLOW_USER_FAILURE,
)
