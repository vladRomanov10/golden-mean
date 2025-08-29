import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { FavoriteService } from 'src/app/shared/modules/favorite/services/favorite.service'
import {
  deleteFromFavoritesAction,
  deleteFromFavoritesFailureAction,
  deleteFromFavoritesSuccessAction,
} from 'src/app/shared/modules/favorite/store/actions/deleteFromFavorites.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

@Injectable()
export class DeleteFromFavoritesEffect {
  private deleteFromFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFromFavoritesAction),
      switchMap(({ slug }) => {
        return this.favouriteService.removeFromFavorites(slug).pipe(
          map((article: ArticleInterface) => {
            return deleteFromFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(deleteFromFavoritesFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private favouriteService: FavoriteService,
  ) {}
}
