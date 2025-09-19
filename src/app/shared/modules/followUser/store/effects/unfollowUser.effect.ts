import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { FollowUserService } from 'src/app/shared/modules/followUser/services/followUser.service'
import {
  unfollowUserAction,
  unfollowUserFailureAction,
  unfollowUserSuccessAction,
} from 'src/app/shared/modules/followUser/store/actions/unfollowUser.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

@Injectable()
export class UnfollowUserEffect {
  unfollowUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unfollowUserAction),
      switchMap(({ slug }) => {
        return this.followUserService.unfollowUser(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return unfollowUserSuccessAction({ userProfile })
          }),
          catchError(() => {
            return of(unfollowUserFailureAction())
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
