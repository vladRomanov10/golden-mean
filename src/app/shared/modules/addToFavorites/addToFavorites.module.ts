import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddToFavoritesComponent } from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component'
import { EffectsModule } from '@ngrx/effects'
import { AddToFavoritesEffect } from 'src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect'
import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/services/addToFavorites.service'
import { RemoveFromFavoritesEffect } from 'src/app/shared/modules/addToFavorites/store/effects/removeFromFavorites.effect'

@NgModule({
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect, RemoveFromFavoritesEffect]),
  ],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
