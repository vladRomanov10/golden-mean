import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { unfollowUserAction } from 'src/app/shared/modules/followUser/store/actions/unfollowUser.action'
import { followUserAction } from 'src/app/shared/modules/followUser/store/actions/followUser.action'

@Component({
  selector: 'app-follow-user',
  templateUrl: './followUser.component.html',
})
export class FollowUserComponent implements OnChanges {
  @Input('isFollowing') isFollowingProps!: boolean
  @Input('slug') slugProps!: string | null
  @Input('userName') userNameProps!: string

  public isFollowing!: boolean

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFollowingProps']) {
      this.isFollowing = changes['isFollowingProps'].currentValue
    }
  }

  followUser(): void {
    if (this.isFollowing) {
      this.store.dispatch(unfollowUserAction({ slug: `${this.slugProps}` }))
    } else {
      this.store.dispatch(followUserAction({ slug: `${this.slugProps}` }))
    }
    this.isFollowing = !this.isFollowing
  }
}
