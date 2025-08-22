import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { select, Store } from '@ngrx/store'
import { registerAction } from 'src/app/auth/store/actions/register.action'
import { Observable } from 'rxjs'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

@Component({
  selector: 'gm-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
