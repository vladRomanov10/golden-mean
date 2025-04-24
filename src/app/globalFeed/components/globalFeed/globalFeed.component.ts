import { Component } from '@angular/core'

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrl: './globalFeed.component.scss',
})
export class GlobalFeedComponent {
  public apiUrl = '/articles'
}
