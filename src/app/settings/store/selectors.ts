import { SettingsStateInterface } from 'src/app/settings/types/settingsState.interface'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings')

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface): boolean =>
    settingsState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface): BackendErrorsInterface | null =>
    settingsState.validationErrors,
)
