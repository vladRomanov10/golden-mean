import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { FavoriteService } from 'src/app/shared/modules/favorite/services/favorite.service'
import {
  removeFromFavoritesAction,
  removeFromFavoritesFailureAction,
  removeFromFavoritesSuccessAction,
} from 'src/app/shared/modules/favorite/store/actions/removeFromFavorites.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

@Injectable()
export class RemoveFromFavoritesEffect {
  private removeFromFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromFavoritesAction),
      switchMap(({ slug }) => {
        return this.favouriteService.removeFromFavorites(slug).pipe(
          map((article: ArticleInterface) => {
            return removeFromFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(removeFromFavoritesFailureAction())
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
