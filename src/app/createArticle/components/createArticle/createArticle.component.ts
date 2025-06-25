import { Component } from '@angular/core'

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent {
  public initialValues = {
    title: 'Foo',
    description: 'off',
    body: 'ahh',
    tagList: ['join', 'us'],
  }

  onSubmit(res: any): void {
    console.log('onSubmit in parent', res)
  }
}
