import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
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
  constructor(private store: Store, private commonService: CommonService) {}

  ngOnInit(): void {
    this.userLoggedIn();
    this.commonService.checkUser.next(
      !!JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn
    );
    // this.userService.setLoginStatus();
  }

  userLoggedIn() {
    this.isLoggedIn$ = this.store.pipe(
      select((login) => login['user']?.loggedIn)
    );
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
