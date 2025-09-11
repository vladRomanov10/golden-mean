import { Component, OnInit } from '@angular/core'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { getUserProfileAction } from 'src/app/userProfile/store/actions/getUserProfile.action'
import {
  errorSelector,
  isLoadingSelector,
} from 'src/app/userProfile/store/selectors'

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent implements OnInit {
  public userProfile!: UserProfileInterface
  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>

  private slug!: string | null
  private userProfileSubscription!: Subscription

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializeValues()
    this.fetchData()
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  private fetchData(): void {
    this.store.dispatch(getUserProfileAction({ slug: `${this.slug}` }))
  }
}
