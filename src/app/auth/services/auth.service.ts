import { Injectable } from '@angular/core'

import { map, Observable, tap } from 'rxjs'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { environment } from 'src/environments/environment'

import { HttpClient } from '@angular/common/http'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'
import { CurrentUserInputInterface } from 'src/app/shared/types/interfaces/currentUserInput.interface'
import { LogoutResponseInterface } from 'src/app/auth/types/logoutResponse.interface'
import { ArticleAuthorInterface } from 'src/app/shared/types/interfaces/articleAuthor.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<ArticleAuthorInterface> {
    const url: string = environment.apiUrl + '/users'

    return this.http.post<ArticleAuthorInterface>(url, data)
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  logout(): Observable<LogoutResponseInterface> {
    const url: string = environment.apiUrl + '/users/logout'

    return this.http.post<LogoutResponseInterface>(url, null)
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/user'

    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface,
  ): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/user'
    return this.http
      .put<AuthResponseInterface>(url, { user: currentUserInput })
      .pipe(map(this.getUser))
  }

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }
}
