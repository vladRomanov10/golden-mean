import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FollowUserComponent } from 'src/app/shared/modules/followUser/components/followUser/followUser.component'

@NgModule({
  declarations: [FollowUserComponent],
  imports: [CommonModule],
  exports: [FollowUserComponent],
})
export class FollowUserModule {}
