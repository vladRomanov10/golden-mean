import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { catchError, of, switchMap, map, tap } from 'rxjs'

import { CreateArticleService } from 'src/app/createArticle/services/createArticle.service'

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from 'src/app/createArticle/store/actions/createArticle.action'

import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

@Injectable()
export class CreateArticleEffect {
  private readonly createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({
                errors: errorResponse.error,
              }),
            )
          }),
        )
      }),
    ),
  )

  private readonly redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        }),
      ),
    { dispatch: false },
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router,
  ) {}
}
