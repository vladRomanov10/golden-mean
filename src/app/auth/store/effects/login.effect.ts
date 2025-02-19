import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action'
import { catchError, of, switchMap, map, tap } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { Router } from '@angular/router'

@Injectable()
export class LoginEffect {
  private login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return loginSuccessAction({ currentUser })
          }),
          catchError((errorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors }),
            )
          }),
        )
      }),
    ),
  )

  private redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
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
