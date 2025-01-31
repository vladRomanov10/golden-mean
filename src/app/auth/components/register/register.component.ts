import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Store } from '@ngrx/store'
import { registerAction } from 'src/app/auth/store/actions/register.action'

@Component({
  selector: 'gm-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value))
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }
}
