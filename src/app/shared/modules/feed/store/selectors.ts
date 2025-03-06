import { createFeatureSelector, createSelector } from '@ngrx/store'
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>('feed')

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface): boolean => feedState.isLoading,
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface): string | null => feedState.error,
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface): GetFeedResponseInterface | null =>
    feedState.data,
)
