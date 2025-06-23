import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps!: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps!: boolean
  @Input('errors') errorsProps!: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  private form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
  }

  private onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value)
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: '',
    })
  }
}
