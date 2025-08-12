import { Component, Input } from '@angular/core'
import { TagType } from 'src/app/shared/types/aliases/tag.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input('tags') tagsProps!: TagType[]
}
