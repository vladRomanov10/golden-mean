import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { Observable, Subscription } from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article!: ArticleInterface | null
  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public isAuthor$!: Observable<boolean>

  private slug!: string | null
  private articleSubscription!: Subscription

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe()
  }

  private initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  private fetchData() {
    this.store.dispatch(getArticleAction({ slug: `${this.slug}` }))
  }

  private initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }
}
