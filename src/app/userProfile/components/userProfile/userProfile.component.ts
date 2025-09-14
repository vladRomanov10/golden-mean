import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { combineLatestWith, filter, map, Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute, Router } from '@angular/router'
import { getUserProfileAction } from 'src/app/userProfile/store/actions/getUserProfile.action'
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from 'src/app/userProfile/store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public userProfile!: UserProfileInterface
  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public isCurrentUserProfile$!: Observable<boolean>

  private slug!: string | null
  private apiUrl!: string
  private userProfileSubscription!: Subscription
  private currentUser$!: Observable<CurrentUserInterface>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }

  private initializeValues(): void {
    const isFavorites = this.router.url.includes('favorites')
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.currentUser$ = this.store.pipe(
      select(currentUserSelector),
      filter(Boolean),
    )
    this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`

    this.isCurrentUserProfile$ = this.currentUser$.pipe(
      map(
        (currentUser: CurrentUserInterface) =>
          this.userProfile.username === currentUser.username,
      ),
    )
  }

  private fetchData(): void {
    this.store.dispatch(getUserProfileAction({ slug: `${this.slug}` }))
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector), filter(Boolean))
      .subscribe((userProfile: UserProfileInterface) => {
        this.userProfile = userProfile
      })
  }
}
