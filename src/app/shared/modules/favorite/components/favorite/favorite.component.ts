import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/addToFavorites.action'

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
      return
    } else {
      this.addToFavorites(this.articleSlugProps)
    }
  }

  private addToFavorites(slug: string) {
    this.store.dispatch(addToFavoritesAction({ slug }))
  }
}
