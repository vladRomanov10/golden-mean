import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { combineLatestWith, map, Observable, Subscription } from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

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

  public articleSelector$!: Observable<ArticleInterface | null>
  public currentUserSelector$!: Observable<CurrentUserInterface | null>

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
    this.articleSelector$ = this.store.pipe(select(articleSelector))
    this.currentUserSelector$ = this.store.pipe(select(currentUserSelector))
    this.isAuthor$ = this.articleSelector$.pipe(
      combineLatestWith(this.currentUserSelector$),
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null,
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return article.author.username === currentUser.username
        },
      ),
    )
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
