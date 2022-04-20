import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userLoginAction } from './shared/store/user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bug-tracker';
  constructor(private store: Store) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage?.getItem('user') || '{}');
    this.store.dispatch(userLoginAction({ user }));
  }

  ngOnDestroy(): void {}
}
