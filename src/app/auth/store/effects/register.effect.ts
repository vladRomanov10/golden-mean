import { Injectable } from '@angular/core'

import { createEffect, Actions, ofType } from '@ngrx/effects'
import {
  registerAction,
  registerFailureActions,
  registerSuccessActions,
} from 'src/app/auth/store/actions/register.action'
import { catchError, map, of, switchMap } from 'rxjs'

import { AuthService } from 'src/app/auth/services/auth.service'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessActions({ currentUser })
          }),
          catchError(() => {
            return of(registerFailureActions())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
