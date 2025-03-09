import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import { PersistenceService } from 'src/app/shared/services/persistence.service'
import { LoginComponent } from './components/login/login.component'
import { LoginEffect } from 'src/app/auth/store/effects/login.effect'
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
