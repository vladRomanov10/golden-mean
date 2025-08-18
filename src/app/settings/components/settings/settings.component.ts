import { Component, OnDestroy, OnInit } from '@angular/core'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'
import { filter, Observable, Subscription } from 'rxjs'
import { FormBuilder, FormGroup } from '@angular/forms'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/settings/store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  public isSubmitting$!: Observable<boolean>
  public backendErrors$!: Observable<BackendErrorsInterface | null>

  private currentUser!: CurrentUserInterface
  private currentUserSubscription!: Subscription
  private form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit() {
    this.initializeListeners()
    this.initializeValues()
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe()
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser
        this.initializeForm()
      })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    })
  }
}
