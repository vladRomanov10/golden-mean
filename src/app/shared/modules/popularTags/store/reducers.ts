import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state: PopularTagsStateInterface): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    getPopularTagsSuccessAction,
    (state: PopularTagsStateInterface, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    }),
  ),

  on(
    getPopularTagsFailureAction,
    (state: PopularTagsStateInterface): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
