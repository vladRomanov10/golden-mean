import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action'
import { ArticleInterface } from 'src/app/shared/types/interfaces/article.interface'
import { filter, map, Observable, Subscription } from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'
import { deleteArticleAction } from 'src/app/article/store/actions/deleteArticle.action'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article!: ArticleInterface
  public isLoading$!: Observable<boolean>
  public error$!: Observable<BackendErrorsInterface | null>
  public isAuthor$!: Observable<boolean>

  private currentUserSelector$!: Observable<CurrentUserInterface>
  private articleSubscription!: Subscription
  private slug!: string | null

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

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: `${this.slug}` }))
  }

  private initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.currentUserSelector$ = this.store.pipe(
      select(currentUserSelector),
      filter(Boolean),
    )
    this.isAuthor$ = this.currentUserSelector$.pipe(
      map(
        (currentUser: CurrentUserInterface) =>
          this.article.author.username === currentUser.username,
      ),
    )
  }

  private fetchData() {
    this.store.dispatch(getArticleAction({ slug: `${this.slug}` }))
  }

  private initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector), filter(Boolean))
      .subscribe((article: ArticleInterface) => {
        this.article = article
      })
  }
}
