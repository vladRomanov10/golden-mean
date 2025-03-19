import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'

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
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
