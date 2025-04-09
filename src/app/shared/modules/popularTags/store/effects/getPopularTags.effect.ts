import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { GetPopularTagsService } from 'src/app/shared/modules/popularTags/services/getPopularTags.service'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'

@Injectable()
export class GetPopularTagsEffect {
  private getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(({ url }) => {
        return this.popularTagsService.getPopularTags(url).pipe(
          map((popularTags: GetPopularTagsResponseInterface) => {
            return getPopularTagsSuccessAction({ popularTags })
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction)
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: GetPopularTagsService,
  ) {}
}
