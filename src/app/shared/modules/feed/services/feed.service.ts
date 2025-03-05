import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'

@Injectable()
export class FeedService {
  getFeed(url: string): Observable<GetFeedResponseInterface> {}
}
