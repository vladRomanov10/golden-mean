import { createAction, props } from '@ngrx/store'

import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { ActionTypes } from 'src/app/editArticle/store/actionTypes'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>(),
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>(),
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
)
