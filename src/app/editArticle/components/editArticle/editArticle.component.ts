import { Component, OnInit } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { filter, map, Observable } from 'rxjs'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import { createArticleAction } from 'src/app/createArticle/store/actions/createArticle.action'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from 'src/app/editArticle/store/actions/getArticle.action'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/editArticle/store/selectors'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
})
export class EditArticleComponent implements OnInit {
  // readonly initialValues: ArticleInputInterface = {
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: [],
  // }
  public isSubmitting$!: Observable<boolean>
  public backendErrors$!: Observable<BackendErrorsInterface | null>
  public isLoading$!: Observable<boolean>
  public initialValues$!: Observable<ArticleInputInterface>

  private slug!: string | null

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializeValues()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => ({
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      })),
    )
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: `${this.slug}` }))
  }
}
