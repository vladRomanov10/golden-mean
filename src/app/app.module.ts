import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppComponent } from 'src/app/app.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment.prod'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module'
import { AuthInterceptor } from 'src/app/shared/services/authInterceptor.service'
import { GlobalFeedModule } from 'src/app/globalFeed/globalFeed.module'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { YourFeedModule } from 'src/app/yourFeed/yourFeed.module'
import { TagFeedModule } from 'src/app/tagFeed/tagFeed.module'
import { ArticleModule } from 'src/app/article/article.module'
import { CreateArticleModule } from 'src/app/createArticle/createArticle.module'
import { EditArticleModule } from 'src/app/editArticle/editArticle.module'
import { SettingsModule } from 'src/app/settings/settings.module'
import { UserProfileModule } from 'src/app/userProfile/userProfile.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
