import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import {
  popularTagsSelector,
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/popularTags/store/selectors'
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'
import { TagType } from 'src/app/shared/types/tag.type'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  public isLoading$!: Observable<boolean>
  public error$!: Observable<string | null>
  public popularTags$!: Observable<TagType[] | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchPopularTags()
    this.initializeValues()
  }

  private fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction())
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
  }
}
