import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  logoutAction,
  logoutFailureAction,
  logoutSuccessAction,
} from 'src/app/auth/store/actions/logout.action'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'
import { Router } from '@angular/router'

@Injectable()
export class LogoutEffect {
  private logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            return logoutSuccessAction()
          }),
          catchError(() => {
            return of(logoutFailureAction())
          }),
        )
      }),
    ),
  )

  private redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccessAction),
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
