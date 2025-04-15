import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/popularTags/store/actionTypes'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { TagType } from 'src/app/shared/types/tag.type'

export const getPopularTagsAction = createAction(
  ActionTypes.GET_POPULAR_TAGS,
  props<{ url: string }>(),
)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: TagType[] }>(),
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE,
)
