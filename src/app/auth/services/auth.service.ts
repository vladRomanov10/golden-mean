import { Injectable } from '@angular/core'

import { map, Observable, tap } from 'rxjs'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { environment } from 'src/environments/environment'

import { HttpClient } from '@angular/common/http'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/user'

    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }
}
