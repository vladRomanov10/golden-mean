import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popularTags/popularTags.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/popularTags/store/reducers'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [CommonModule, StoreModule.forFeature('popularTags', reducers)],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
