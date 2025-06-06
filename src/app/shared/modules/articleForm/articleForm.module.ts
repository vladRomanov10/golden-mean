import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm/articleForm.component'

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
