import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/interfaces/articleInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'
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

  public form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
  }

  onSubmit(): void {
    const formValue = this.form.value
    const updateFormValue: ArticleInputInterface = {
      ...formValue,
      tagList: formValue.tagList.split(' '),
    }

    this.articleSubmitEvent.emit(updateFormValue)
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    })
  }
}
