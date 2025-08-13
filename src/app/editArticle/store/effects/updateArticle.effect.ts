import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { catchError, of, switchMap, map, tap } from 'rxjs'

import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { PutArticleRequestInterface } from 'src/app/shared/types/aliases/articleRequest.aliases'
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from 'src/app/editArticle/store/actions/updateArticle.action'

@Injectable()
export class UpdateArticleEffect {
  private readonly updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        const articlePutRequest: PutArticleRequestInterface = {
          article: articleInput,
        }
        return this.editArticleService
          .updateArticle(slug, articlePutRequest)
          .pipe(
            map((article: ArticleInterface) => {
              return updateArticleSuccessAction({ article })
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                updateArticleFailureAction({
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
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        }),
      ),
    { dispatch: false },
  )

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router,
  ) {}
}
