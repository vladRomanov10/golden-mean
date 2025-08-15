import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import { UpdateArticleEffect } from 'src/app/editArticle/store/effects/updateArticle.effect'
import { GetArticleEffect } from 'src/app/editArticle/store/effects/getArticle.effect'
import { reducers } from 'src/app/editArticle/store/reducers'
import { EditArticleComponent } from 'src/app/editArticle/components/editArticle/editArticle.component'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'

const routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent },
]

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
