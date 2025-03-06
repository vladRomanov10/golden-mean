import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }
}
