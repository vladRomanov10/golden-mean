import { Component } from '@angular/core'

@Component({
  selector: 'app-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrl: './yourFeed.component.scss',
})
export class YourFeedComponent {
  public apiUrl = '/articles/feed'
  public tagsApiUrl = '/tags'
}
