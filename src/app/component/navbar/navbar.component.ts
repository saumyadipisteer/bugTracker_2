import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes = [];

  isLoggedIn$: Observable<boolean>;
  constructor( private store: Store) {}

  ngOnInit(): void {
    this.userLoggedIn();
    // this.userService.setLoginStatus();
  }

  userLoggedIn() {
    // this.isLoggedIn$ = this.store.pipe(select(isLoggedin));
  }

  userLoggedOut() {
    // this.userService.postUserLoggedOut();
    //this.store.dispatch(userLogout({ status: false }));
  }
}
