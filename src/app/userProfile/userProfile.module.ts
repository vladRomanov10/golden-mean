import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserProfileComponent } from './components/userProfile/userProfile.component'
import { RouterModule } from '@angular/router'
import { UserProfileService } from 'src/app/userProfile/services/userProfile.service'
import { EffectsModule } from '@ngrx/effects'
import { GetUserProfileEffect } from 'src/app/userProfile/effects/getUserProfile.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/userProfile/store/reducers'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { FollowUserModule } from 'src/app/shared/modules/followUser/followUser.module'

const routes = [
  { path: 'profiles/:slug', component: UserProfileComponent },
  { path: 'profiles/:slug/favorites', component: UserProfileComponent },
]

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
    FollowUserModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
