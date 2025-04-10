import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'
import { select, Store } from '@ngrx/store'
import {
  popularTagsSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/popularTags/store/selectors'
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrl: './popularTags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  @Input('tagsApiUrl') tagsApiUrlProps!: string

  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public popularTags$!: Observable<GetPopularTagsResponseInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction({ url: this.tagsApiUrlProps }))
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
  }
}
