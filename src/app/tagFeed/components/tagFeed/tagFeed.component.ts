import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrl: './tagFeed.component.scss',
})
export class TagFeedComponent implements OnInit, OnDestroy {
  public apiUrl!: string
  public tagName!: string | null

  private routeParamsSubscribe!: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeParamsSubscribe = this.route.params.subscribe(
      (params: Params) => {
        this.tagName = params['slug']
        this.apiUrl = `/articles?tag=${this.tagName}`
      },
    )
  }

  ngOnDestroy() {
    this.routeParamsSubscribe.unsubscribe()
  }
}
