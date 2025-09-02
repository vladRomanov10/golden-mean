import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { UserProfileInterface } from 'src/app/shared/types/interfaces/userProfile.interface'
import { environment } from 'src/environments/environment'
import { GetUserProfileResponseInterface } from 'src/app/userProfile/types/getUserProfileResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url: string = `${environment.apiUrl}/profiles/${slug}`

    return this.http.get<GetUserProfileResponseInterface>(url).pipe(
      map((response) => {
        return response.profile
      }),
    )
  }
}
