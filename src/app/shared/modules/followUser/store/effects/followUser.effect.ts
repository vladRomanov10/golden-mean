import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  followUserAction,
  followUserFailureAction,
  followUserSuccessAction,
} from 'src/app/shared/modules/followUser/store/actions/followUser.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { FollowUserService } from 'src/app/shared/modules/followUser/services/followUser.service'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

@Injectable()
export class FollowUserEffect {
  private followUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followUserAction),
      switchMap(({ slug }) => {
        return this.followUserService.followUser(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return followUserSuccessAction({ userProfile })
          }),
          catchError(() => {
            return of(followUserFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private followUserService: FollowUserService,
  ) {}
}
