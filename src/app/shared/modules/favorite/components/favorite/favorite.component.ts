import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent {
  @Input('favoritesCount') favoritesCountProps!: number
  @Input('articleSlug') articleSlugProps!: string
  @Input('favorited') favoritedProps!: boolean

  toggleFavorite(articleSlug: string): void {}
}
