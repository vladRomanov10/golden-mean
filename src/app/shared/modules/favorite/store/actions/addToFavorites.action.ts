import { createAction } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/favorite/store/actionTypes'

export const addToFavoritesAction = createAction(ActionTypes.ADD_TO_FAVORITE)
export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITE_SUCCESS,
)
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITE_FAILURE,
)
