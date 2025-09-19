import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/followUser/store/actionTypes'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

export const unfollowUserAction = createAction(
  ActionTypes.UNFOLLOW_USER,
  props<{ slug: string }>(),
)

export const unfollowUserSuccessAction = createAction(
  ActionTypes.UNFOLLOW_USER_SUCCESS,
  props<{ userProfile: UserProfileInterface }>(),
)

export const unfollowUserFailureAction = createAction(
  ActionTypes.UNFOLLOW_USER_FAILURE,
)
