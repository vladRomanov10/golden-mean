import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/favorite/store/actionTypes'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ slug: string }>(),
)
export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>(),
)
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE,
)
