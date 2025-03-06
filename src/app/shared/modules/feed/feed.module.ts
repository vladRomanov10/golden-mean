import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/feed/store/reducers'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import { RouterLink } from '@angular/router'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterLink,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
