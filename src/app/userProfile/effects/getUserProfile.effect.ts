import { Injectable } from '@angular/core'
import { UserProfileService } from 'src/app/userProfile/services/userProfile.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from 'src/app/userProfile/store/actions/getUserProfile.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'

@Injectable()
export class GetUserProfileEffect {
  private readonly getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return getUserProfileSuccessAction({ userProfile })
          }),
          catchError(() => {
            return of(getUserProfileFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private userProfileService: UserProfileService,
    private actions$: Actions,
  ) {}
}
