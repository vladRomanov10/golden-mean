import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'

import { createEffect, Actions, ofType } from '@ngrx/effects'

import {
  registerAction,
  registerFailureActions,
  registerSuccessActions,
} from 'src/app/auth/store/actions/register.action'

import { catchError, map, of, switchMap, tap } from 'rxjs'

import { AuthService } from 'src/app/auth/services/auth.service'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

import { Router } from '@angular/router'

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
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureActions({ errors: errorResponse.error.errors }),
            )
          }),
        )
      }),
    ),
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessActions),
        tap(() => {
          this.router.navigateByUrl('/')
        }),
      ),
    { dispatch: false },
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
