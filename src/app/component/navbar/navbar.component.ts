import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { userLoginAction, userLogout } from 'src/app/user/state/user.action';
import { initialUserValue } from 'src/app/user/state/user.reducer';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes = [];

  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userLoggedIn();
    // this.userService.setLoginStatus();
  }

  userLoggedIn() {
    // this.store.dispatch(userLoginAction(initialUserValue))
    this.isLoggedIn$ =
      of(JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn);

      this.isLoggedIn$.subscribe(data=>console.log(data))
  }

  userLoggedOut() {
    // this.userService.postUserLoggedOut();
    localStorage.setItem(
      'user',
      JSON.stringify({
        user: '',
        loggedIn: false,
        errorMessage: '',
        hasError: false,
      })
    );
    const data = initialUserValue;
    this.store.dispatch(userLogout({ data }));
  }
}
