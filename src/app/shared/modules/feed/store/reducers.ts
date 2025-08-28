import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import { routerNavigationAction } from '@ngrx/router-store'
import { addToFavoritesSuccessAction } from 'src/app/shared/modules/favorite/store/actions/addToFavorites.action'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { deleteFromFavoritesSuccessAction } from 'src/app/shared/modules/favorite/store/actions/deleteFromFavorites.action'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state: FeedStateInterface): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getFeedSuccessAction,
    (state: FeedStateInterface, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    }),
  ),
  on(
    getFeedFailureAction,
    (state: FeedStateInterface): FeedStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(
    addToFavoritesSuccessAction,
    deleteFromFavoritesSuccessAction,
    (state: FeedStateInterface, action): FeedStateInterface => {
      if (!state.data) {
        return state
      }
      const updateArticles = state.data.articles.map(
        (article: ArticleInterface) => {
          if (article.slug === action.article.slug) {
            return action.article
          }
          return article
        },
      )
      return {
        ...state,
        data: {
          ...state.data,
          articles: updateArticles,
        },
      }
    },
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState),
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
