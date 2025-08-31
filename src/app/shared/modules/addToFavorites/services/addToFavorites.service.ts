import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { environment } from 'src/environments/environment'
import {
  AddToFavoritesResponseInterface,
  RemoveFromFavoritesResponseInterface,
} from 'src/app/shared/types/aliases/articleResponse.aliases'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http
      .post<AddToFavoritesResponseInterface>(url, null)
      .pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http
      .delete<RemoveFromFavoritesResponseInterface>(url)
      .pipe(map(this.getArticle))
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  private getArticle(
    response:
      | AddToFavoritesResponseInterface
      | RemoveFromFavoritesResponseInterface,
  ): ArticleInterface {
    return response.article
  }
}
