import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/favorite/store/actionTypes'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export const deleteFromFavoritesAction = createAction(
  ActionTypes.DELETE_FROM_FAVORITES,
  props<{ slug: string }>(),
)
export const deleteFromFavoritesSuccessAction = createAction(
  ActionTypes.DELETE_FROM_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>(),
)
export const deleteFromFavoritesFailureAction = createAction(
  ActionTypes.DELETE_FROM_FAVORITES_FAILURE,
)
