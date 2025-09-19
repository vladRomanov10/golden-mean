import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from 'src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/services/addToFavorites.service'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

@Injectable()
export class AddToFavoritesEffect {
  private addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ slug }) => {
        return this.addToFavoritesService.addToFavorites(slug).pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService,
  ) {}
}
