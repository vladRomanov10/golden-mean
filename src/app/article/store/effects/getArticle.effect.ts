import { Injectable } from '@angular/core'

import { createEffect, Actions, ofType } from '@ngrx/effects'

import { catchError, map, of, switchMap } from 'rxjs'

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'

@Injectable()
export class GetFeedEffect {
  private getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed })
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {}
}
