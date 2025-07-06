import { Component, OnInit } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { Observable } from 'rxjs'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/createArticle/store/selectors'
import { createArticleAction } from 'src/app/createArticle/store/actions/createArticle.action'

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent implements OnInit {
  readonly initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  public isSubmitting$!: Observable<boolean>
  public backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }
}
