import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/article/store/reducers'
import { RouterLink, RouterModule } from '@angular/router'
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { ArticleComponent } from 'src/app/article/components/article/article.component'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import { TagListModule } from 'src/app/shared/modules/tagList/tagList.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterLink,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    BackendErrorMessagesModule,
    TagListModule,
  ],
  providers: [SharedArticleService],
})
export class ArticleModule {}
