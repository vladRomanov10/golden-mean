import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { unfollowUserAction } from 'src/app/shared/modules/followUser/store/actions/unfollowUser.action'
import { followUserAction } from 'src/app/shared/modules/followUser/store/actions/followUser.action'

@Component({
  selector: 'app-follow-user',
  templateUrl: './followUser.component.html',
})
export class FollowUserComponent {
  @Input('isFollowing') isFollowingProps!: boolean
  @Input('slug') slugProps!: string | null

  constructor(private store: Store) {}

  followUser(): void {
    if (this.isFollowingProps) {
      this.store.dispatch(unfollowUserAction({ slug: `${this.slugProps}` }))
    } else {
      this.store.dispatch(followUserAction({ slug: `${this.slugProps}` }))
    }
  }
}
