import { Component, Input, OnInit } from '@angular/core'
import { BackendErrorsInterface } from 'src/app/shared/types/interfaces/backendErrors.interface'

@Component({
  selector: 'app-backendErrorMessages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrl: './backendErrorMessages.component.scss',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface

  public errorMessages!: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name]
        return `${name}: ${messages}`
      },
    )
  }
}
