import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserProfileComponent } from './components/userProfile/userProfile.component'
import { RouterModule } from '@angular/router'
import { UserProfileService } from 'src/app/userProfile/services/userProfile.service'

const routes = [
  { path: 'profiles/:slug', component: UserProfileComponent },
  { path: 'profiles/:slug/favorites', component: UserProfileComponent },
]

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [UserProfileService],
})
export class UserProfileModule {}
