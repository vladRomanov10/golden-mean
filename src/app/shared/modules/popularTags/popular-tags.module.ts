import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popularTags/popularTags.component'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [CommonModule],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
