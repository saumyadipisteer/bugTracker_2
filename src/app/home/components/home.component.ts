import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    this.defaultUser();
    // this.userService.setLoginStatus();
    // this.isLoggedIn$ = this.store.pipe(
    //   select(isLoggedin)
    // )
    
  }

  /**
   * Adds a default user for the application
   * @param none
   * @returns `void`
   */
  private defaultUser(): void {
   // localStorage.setItem('users', JSON.stringify(this.userService.newUser));
    
  }

}
