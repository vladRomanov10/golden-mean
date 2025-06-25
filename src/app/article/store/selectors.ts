import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>('article')

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface): boolean => articleState.isLoading,
)

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface): BackendErrorsInterface | null =>
    articleState.error,
)

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface): ArticleInterface | null =>
    articleState.data,
)
