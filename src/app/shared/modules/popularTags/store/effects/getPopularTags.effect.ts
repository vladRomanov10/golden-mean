import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { TagType } from 'src/app/shared/types/tag.type'

@Injectable()
export class GetPopularTagsEffect {
  private getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(({ url }) => {
        return this.popularTagsService.getPopularTags(url).pipe(
          map((popularTags: TagType[]) => {
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
    private popularTagsService: PopularTagsService,
  ) {}
}
