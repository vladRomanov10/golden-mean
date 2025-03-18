import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrl: './popularTags.component.scss',
})
export class PopularTagsComponent {
  @Input('tagsApiUrl') tagsApiUrlProps!: string
}
