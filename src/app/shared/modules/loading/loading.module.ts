import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorMessageComponent } from 'src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component'
import { LoadingComponent } from 'src/app/shared/modules/loading/components/loading/loading.component'

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
