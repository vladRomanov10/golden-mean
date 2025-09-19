import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FollowUserComponent } from 'src/app/shared/modules/followUser/components/followUser/followUser.component'
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects'
import { FollowUserEffect } from 'src/app/shared/modules/followUser/store/effects/followUser.effect'
import { UnfollowUserEffect } from 'src/app/shared/modules/followUser/store/effects/unfollowUser.effect'

@NgModule({
  declarations: [FollowUserComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FollowUserEffect, UnfollowUserEffect]),
  ],
  exports: [FollowUserComponent],
})
export class FollowUserModule {}
