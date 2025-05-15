import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-global-feed',
  templateUrl: './tagFeed.component.html',
  styleUrl: './tagFeed.component.scss',
})
export class TagFeedComponent implements OnInit {
  public apiUrl!: string
  public tagName!: string | null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tagName = this.route.snapshot.paramMap.get('slug')
    this.apiUrl = `/articles?tag=${this.tagName}`
  }
}
