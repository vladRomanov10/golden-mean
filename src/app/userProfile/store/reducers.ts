import { UserProfileStateInterface } from 'src/app/userProfile/types/interfaces/userProfileState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from 'src/app/userProfile/store/actions/getUserProfile.action'
import { routerNavigationAction } from '@ngrx/router-store'

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const userProfileReducer = createReducer(
  initialState,
  on(getUserProfileAction, (state: UserProfileStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getUserProfileSuccessAction,
    (state: UserProfileStateInterface, action) => ({
      ...state,
      data: action.userProfile,
      isLoading: false,
    }),
  ),
  on(getUserProfileFailureAction, (state: UserProfileStateInterface) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, (): UserProfileStateInterface => initialState),
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}
