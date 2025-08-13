import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateArticleComponent } from 'src/app/createArticle/components/createArticle/createArticle.component'
import { RouterModule } from '@angular/router'
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/createArticle/store/reducers'
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import { UpdateArticleEffect } from 'src/app/editArticle/store/effects/updateArticle.effect'
import { GetArticleEffect } from 'src/app/editArticle/store/effects/getArticle.effect'

const routes = [{ path: 'articles/new', component: CreateArticleComponent }]

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
