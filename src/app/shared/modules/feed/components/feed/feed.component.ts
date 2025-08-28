import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
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
import { parseUrl, stringify } from 'query-string'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
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
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnChanges(changes: SimpleChanges) {
    const isApiUrlChanged: boolean =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue

    if (isApiUrlChanged) {
      this.fetchFeed()
    }
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

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      },
    )
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }
}
