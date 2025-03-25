import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'

const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>('popular tags')

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState): boolean => popularTagsState.isLoading,
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState): string | null => popularTagsState.error,
)

export const dataSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsStore): GetPopularTagsResponseInterface | null =>
    popularTagsStore.data,
)
