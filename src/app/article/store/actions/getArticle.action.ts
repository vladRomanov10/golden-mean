import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/article/store/actionTypes'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>(),
)
export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>(),
)
export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
)
