import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { environment } from 'src/environments/environment'
import {
  FollowUserResponseInterface,
  UnfollowUserResponseInterface,
} from 'src/app/shared/modules/followUser/types/aliases/followUserResponse.aliases'

@Injectable({
  providedIn: 'root',
})
export class FollowUserService {
  constructor(private http: HttpClient) {}

  followUser(slug: string): Observable<UserProfileInterface> {
    const url: string = this.getUrl(slug)

    return this.http
      .post<FollowUserResponseInterface>(url, {})
      .pipe(map(this.getUserProfile))
  }

  unfollowUser(slug: string): Observable<UserProfileInterface> {
    const url: string = this.getUrl(slug)

    return this.http
      .delete<UnfollowUserResponseInterface>(url, {})
      .pipe(map(this.getUserProfile))
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/profiles/${slug}/follow`
  }

  private getUserProfile(
    response: FollowUserResponseInterface | UnfollowUserResponseInterface,
  ): UserProfileInterface {
    return response.profile
  }
}
