import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FavoriteComponent } from './components/favorite/favorite.component'
import { EffectsModule } from '@ngrx/effects'
import { AddToFavoritesEffect } from 'src/app/shared/modules/favorite/store/effects/addToFavorites.effect'
import { FavoriteService } from 'src/app/shared/modules/favorite/services/favorite.service'
import { RemoveFromFavoritesEffect } from 'src/app/shared/modules/favorite/store/effects/removeFromFavorites.effect'

@NgModule({
  declarations: [FavoriteComponent],
  exports: [FavoriteComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect, RemoveFromFavoritesEffect]),
  ],
  providers: [FavoriteService],
})
export class FavoriteModule {}
