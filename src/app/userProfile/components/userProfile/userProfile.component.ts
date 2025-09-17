import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { combineLatestWith, filter, map, Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute, Params, Router } from '@angular/router'
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
  public apiUrl!: string

  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public isCurrentUserProfile$!: Observable<boolean>

  private slug!: string | null

  private userProfileSubscription!: Subscription
  private routeParamsSubscription!: Subscription

  private currentUser$!: Observable<CurrentUserInterface>
  private userProfile$!: Observable<UserProfileInterface>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
    this.routeParamsSubscription.unsubscribe()
  }

  private getApiUrl(): void {
    const isFavorites = this.router.url.includes('favorites')
    this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.currentUser$ = this.store.pipe(
      select(currentUserSelector),
      filter(Boolean),
    )
    this.userProfile$ = this.store.pipe(
      select(userProfileSelector),
      filter(Boolean),
    )
    this.isCurrentUserProfile$ = this.currentUser$.pipe(
      combineLatestWith(this.userProfile$),
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          UserProfileInterface,
        ]) => currentUser.username === userProfile.username,
      ),
    )
  }

  private fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: `${this.slug}` }))
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector), filter(Boolean))
      .subscribe((userProfile: UserProfileInterface) => {
        this.userProfile = userProfile
      })
    this.routeParamsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.slug = params['slug']
        this.getApiUrl()
        this.fetchUserProfile()
      },
    )
  }
}
