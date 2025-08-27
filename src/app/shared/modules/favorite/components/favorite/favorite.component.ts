import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/addToFavorites.action'
import { deleteFromFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/deleteFromFavorites.action'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent {
  @Input('favoritesCount') favoritesCountProps!: number
  @Input('articleSlug') articleSlugProps!: string
  @Input('favorited') favoritedProps!: boolean

  constructor(private store: Store) {}

  toggleFavorite(): void {
    if (this.favoritedProps) {
      this.deleteFromFavorites(this.articleSlugProps)
    } else {
      this.addToFavorites(this.articleSlugProps)
    }
  }

  private addToFavorites(slug: string): void {
    this.store.dispatch(addToFavoritesAction({ slug }))
  }

  private deleteFromFavorites(slug: string): void {
    this.store.dispatch(deleteFromFavoritesAction({ slug }))
  }
}
