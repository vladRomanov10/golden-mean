import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input('total') totalProps!: number
  @Input('limit') limitProps!: number
  @Input('currentPage') currentPageProps!: number
  @Input('url') urlProps!: string
}
