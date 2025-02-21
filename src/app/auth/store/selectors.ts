import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): BackendErrorsInterface | null =>
    authState.validationErrors,
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean | null => authState.isLoggedIn,
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isLoggedIn === false,
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): CurrentUserInterface | null =>
    authState.currentUser,
)
