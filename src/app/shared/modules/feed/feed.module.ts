import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/feed/store/reducers'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import { RouterLink } from '@angular/router'
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module'
import { TagListModule } from 'src/app/shared/modules/tagList/tagList.module'
import { FavoriteModule } from 'src/app/shared/modules/favorite/favorite.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterLink,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    FavoriteModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
