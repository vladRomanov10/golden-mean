import { Injectable } from '@angular/core'

import { map, Observable } from 'rxjs'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { environment } from 'src/environments/environment'

import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(
        map(
          (response: AuthResponseInterface): CurrentUserInterface =>
            response.user,
        ),
      )
  }
}
