import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopBarComponent } from 'src/app/shared/modules/topBar/components/top-bar/top-bar.component'
import { RouterLink } from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
