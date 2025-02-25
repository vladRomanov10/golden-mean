import { Injectable } from '@angular/core'

import { createEffect, Actions, ofType } from '@ngrx/effects'

import { catchError, map, of, switchMap } from 'rxjs'

import { AuthService } from 'src/app/auth/services/auth.service'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/getCurrentUser.action'
import { PersistenceService } from 'src/app/shared/services/persistence.service'

@Injectable()
export class GetCurrentUserEffect {
  private getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistence.getCookie('jwt')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistence: PersistenceService,
  ) {}
}
