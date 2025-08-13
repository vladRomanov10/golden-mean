import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>('createArticle')

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface): boolean =>
    createArticleState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (
    createArticleState: CreateArticleStateInterface,
  ): BackendErrorsInterface | null => createArticleState.validationErrors,
)
