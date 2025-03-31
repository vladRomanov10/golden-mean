import { Injectable } from '@angular/core'
import { createEffect } from '@ngrx/effects'
import { Action } from '@ngrx/store'

@Injectable()
export class GetPopularTagsEffect {
  private getPopularTags$ = createEffect(() => )

  constructor(private actions$: Action, ) {
  }
}
