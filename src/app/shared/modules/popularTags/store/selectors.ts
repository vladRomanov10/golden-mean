import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { TagType } from 'src/app/shared/types/aliases/tag.type'

const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>('popularTags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface): boolean =>
    popularTagsState.isLoading,
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface): string | null =>
    popularTagsState.error,
)

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface): TagType[] | null =>
    popularTagsState.data,
)
