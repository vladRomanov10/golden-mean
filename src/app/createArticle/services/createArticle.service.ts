import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { map, Observable } from 'rxjs'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { environment } from 'src/environments/environment'
import { PostArticleResponseInterface } from 'src/app/createArticle/types/aliases/postArticleResponse.alias'
import { PostArticleRequestInterface } from 'src/app/createArticle/types/aliases/postArticleRequest.alias'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: PostArticleRequestInterface,
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles'

    return this.http
      .post<PostArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: PostArticleResponseInterface) => response.article))
  }
}
