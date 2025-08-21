import { Component, OnDestroy, OnInit } from '@angular/core'
import { CurrentUserInterface } from 'src/app/shared/types/interfaces/currentUser.interface'
import { filter, Observable, Subscription } from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
import { select, Store } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/settings/store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInputInterface } from 'src/app/shared/types/interfaces/currentUserInput.interface'
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action'
import { logoutAction } from 'src/app/auth/store/actions/logout.action'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  public isSubmitting$!: Observable<boolean>
  public backendErrors$!: Observable<BackendErrorsInterface | null>
  public currentUser!: CurrentUserInterface
  public form!: FormGroup

  private currentUserSubscription!: Subscription

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

  submit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.form.value,
    }

    this.store.dispatch(updateCurrentUserAction({ currentUserInput }))
  }

  logout(): void {
    this.store.dispatch(logoutAction())
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
      username: [
        this.currentUser.username,
        [Validators.required, Validators.minLength(4)],
      ],
      bio: this.currentUser.bio,
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
    })
  }
}
