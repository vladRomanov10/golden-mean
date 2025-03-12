import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps!: number
  @Input('limit') limitProps!: number
  @Input('currentPage') currentPageProps!: number
  @Input('url') urlProps!: string

  private pagesCount!: number

  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
  }
}
