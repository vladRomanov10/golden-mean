import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/favorite/store/actionTypes'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export const removeFromFavoritesAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITES,
  props<{ slug: string }>(),
)
export const removeFromFavoritesSuccessAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>(),
)
export const removeFromFavoritesFailureAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITES_FAILURE,
)
