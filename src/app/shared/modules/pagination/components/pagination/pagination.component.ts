import { Component, Input, OnInit } from '@angular/core'
import { UtilsService } from 'src/app/shared/services/utils.service'

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

  public pages!: number[]

  private pagesCount!: number

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
