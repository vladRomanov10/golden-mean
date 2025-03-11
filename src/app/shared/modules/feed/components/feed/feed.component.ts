import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import { Observable, Subscription } from 'rxjs'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors'
import { environment } from 'src/environments/environment'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string

  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public feed$!: Observable<GetFeedResponseInterface | null>
  public limit: number = environment.limit
  public baseUrl!: string
  public currentPage!: number

  private queryParamsSubscription!: Subscription

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.fetchData()
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe()
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
      },
    )
  }
}
