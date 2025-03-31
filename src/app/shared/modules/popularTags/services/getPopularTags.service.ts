import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class GetPopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(url: string): Observable<GetPopularTagsResponseInterface> {
    const fullUrl = environment.apiUrl + url

    return this.http.get<GetPopularTagsResponseInterface>(fullUrl)
  }
}
