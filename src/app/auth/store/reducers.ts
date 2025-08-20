import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  registerAction,
  registerFailureActions,
  registerSuccessActions,
} from 'src/app/auth/store/actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/getCurrentUser.action'
import { state } from '@angular/animations'
import { updateCurrentUserSuccessAction } from 'src/app/auth/store/actions/updateCurrentUser.action'
import { logoutSuccessAction } from 'src/app/auth/store/actions/logout.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    registerSuccessActions,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }),
  ),
  on(
    registerFailureActions,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    loginAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    loginSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }),
  ),
  on(
    loginFailureAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    getCurrentUserAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getCurrentUserSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    }),
  ),
  on(
    getCurrentUserFailureAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    }),
  ),
  on(
    updateCurrentUserSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
    }),
  ),
  on(
    logoutSuccessAction,
    (): AuthStateInterface => ({
      ...initialState,
      isLoggedIn: false,
    }),
  ),
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
