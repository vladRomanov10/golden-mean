import { createFeatureSelector, createSelector } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleStateInterface>('editArticle')

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface): boolean =>
    editArticleState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (
    editArticleState: EditArticleStateInterface,
  ): BackendErrorsInterface | null => editArticleState.validationErrors,
)

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface): boolean =>
    editArticleState.isLoading,
)

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface): ArticleInterface | null =>
    editArticleState.article,
)
