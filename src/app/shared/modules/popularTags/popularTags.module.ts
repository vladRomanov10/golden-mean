import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popularTags/popularTags.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/popularTags/store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetPopularTagsEffect } from 'src/app/shared/modules/popularTags/store/effects/getPopularTags.effect'
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popular tags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
