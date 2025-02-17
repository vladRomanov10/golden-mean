import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { loginAction } from 'src/app/auth/store/actions/login.action'
import { switchMap } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'

@Injectable()
export class LoginEffect {
  private login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.register()
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
