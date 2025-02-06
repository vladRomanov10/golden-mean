import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { select, Store } from '@ngrx/store'
import { registerAction } from 'src/app/auth/store/actions/register.action'
import { Observable } from 'rxjs'
import { isSubmittingSelector } from 'src/app/auth/store/selectors'
import { AuthService } from 'src/app/auth/services/auth.service'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'gm-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value))
    this.authService.register(this.form.value).subscribe({
      next: (currentUser: CurrentUserInterface) => {
        console.log('Current user: ', currentUser)
      },
      error: (err) => {
        console.log(`err: `, err)
      },
    })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }
}
