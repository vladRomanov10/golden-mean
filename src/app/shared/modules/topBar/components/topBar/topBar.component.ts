import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { select, Store } from '@ngrx/store'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-topBar',
  templateUrl: './topBar.component.html',
  styleUrl: './topBar.component.scss',
})
export class TopBarComponent implements OnInit {
  public isLoggedIn$!: Observable<boolean | null>
  public isAnonymous$!: Observable<boolean>
  public currentUser$!: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
