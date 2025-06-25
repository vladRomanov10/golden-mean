import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/createArticle/store/actionTypes'
import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>(),
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>(),
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
)
