import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TagListComponent } from 'src/app/shared/modules/tag-list/components/tagList/tagList.component'

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule],
  exports: [TagListComponent],
})
export class TagListModule {}
