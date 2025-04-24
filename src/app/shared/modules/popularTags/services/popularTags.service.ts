import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { environment } from 'src/environments/environment'
import { TagType } from 'src/app/shared/types/tag.type'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<TagType[]> {
    const fullUrl = environment.apiUrl + '/tags'

    return this.http.get<GetPopularTagsResponseInterface>(fullUrl).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      }),
    )
  }
}
