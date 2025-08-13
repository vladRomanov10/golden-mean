import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { environment } from 'src/environments/environment'
import { PutArticleResponseInterface } from 'src/app/shared/types/aliases/articleResponse.aliases'
import { PutArticleRequestInterface } from 'src/app/shared/types/aliases/articleRequest.aliases'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: PutArticleRequestInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .put<PutArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: PutArticleResponseInterface) => response.article))
  }
}
