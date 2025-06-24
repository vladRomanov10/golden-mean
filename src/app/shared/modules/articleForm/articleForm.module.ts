import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm/articleForm.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
