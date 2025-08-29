import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { addToFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/addToFavorites.action'
import { removeFromFavoritesAction } from 'src/app/shared/modules/favorite/store/actions/removeFromFavorites.action'
import { Subscription } from 'rxjs'
import { isLoggedInSelector } from 'src/app/auth/store/selectors'
import { Router } from '@angular/router'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent implements OnInit, OnDestroy {
  @Input('favoritesCount') favoritesCountProps!: number
  @Input('articleSlug') articleSlugProps!: string
  @Input('isFavorited') isFavoritedProps!: boolean

  public favoritesCount!: number
  public isFavorited!: boolean

  private isLoggedIn!: boolean | null
  private isLoggedInSubscription!: Subscription

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy() {
    this.isLoggedInSubscription.unsubscribe()
  }

  handleLike(): void {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login')
      return
    }

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

  private initializeValues(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  private initializeListeners(): void {
    this.isLoggedInSubscription = this.store
      .pipe(select(isLoggedInSelector))
      .subscribe((isLoggedInSelector) => {
        this.isLoggedIn = isLoggedInSelector
      })
  }
}
