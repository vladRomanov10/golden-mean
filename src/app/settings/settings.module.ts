import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from 'src/app/settings/components/settings/settings.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/settings/store/reducers'
import { ReactiveFormsModule } from '@angular/forms'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'

const routes = [{ path: 'settings', component: SettingsComponent }]

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
})
export class SettingsModule {}
