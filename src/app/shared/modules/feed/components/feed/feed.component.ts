import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import { Observable } from 'rxjs'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string

  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public feed$!: Observable<GetFeedResponseInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.fetchData()
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }
}
