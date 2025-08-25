import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { environment } from 'src/environments/environment'
import { ArticleResponseInterface } from 'src/app/shared/types/interfaces/articleResponse.interface'

@Injectable()
export class FavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}/favorite`

    return this.http.post<ArticleResponseInterface>(url, null).pipe(
      map((response: ArticleResponseInterface) => {
        return response.article
      }),
    )
  }

  deleteFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}/favorite`

    return this.http.delete<ArticleResponseInterface>(url).pipe(
      map((response: ArticleResponseInterface) => {
        return response.article
      }),
    )
  }
}
