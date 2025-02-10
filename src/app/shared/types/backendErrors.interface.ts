export interface BackendErrorsInterface {
  message: string
  errors: {
    [key: string]: string
  }
}
