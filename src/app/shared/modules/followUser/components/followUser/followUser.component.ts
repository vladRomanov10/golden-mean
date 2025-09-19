import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-follow-user',
  templateUrl: './followUser.component.html',
})
export class FollowUserComponent {
  @Input('isFollowing') isFollowingProps!: boolean
}
