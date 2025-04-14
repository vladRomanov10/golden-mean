import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GlobalFeedComponent } from 'src/app/globalFeed/components/globalFeed/globalFeed.component'
import { RouterModule } from '@angular/router'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: 'tags/:tag',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
})
export class GlobalFeedModule {}
