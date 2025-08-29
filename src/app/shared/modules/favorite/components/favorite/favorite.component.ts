import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/addToFavorites.action'
import { removeFromFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/removeFromFavoritesAction'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent implements OnInit {
  @Input('favoritesCount') favoritesCountProps!: number
  @Input('articleSlug') articleSlugProps!: string
  @Input('isFavorited') isFavoritedProps!: boolean

  public favoritesCount!: number
  public isFavorited!: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  handleLike(): void {
    if (this.isFavorited) {
      this.removeFromFavorites(this.articleSlugProps)
    } else {
      this.addToFavorites(this.articleSlugProps)
    }
    this.isFavorited = !this.isFavorited
  }

  private addToFavorites(slug: string): void {
    this.favoritesCount = this.favoritesCount + 1
    this.store.dispatch(addToFavoritesAction({ slug }))
  }

  private removeFromFavorites(slug: string): void {
    this.favoritesCount = this.favoritesCount - 1
    this.store.dispatch(removeFromFavoritesAction({ slug }))
  }
}
