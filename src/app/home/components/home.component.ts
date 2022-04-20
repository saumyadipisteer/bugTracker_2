import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private commonService: CommonService ) {}
  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    //this.defaultUser();
    this.commonService.checkUser.next(
      !!JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn
    );
    this.isLoggedIn$ = this.commonService.loginStaus$;
  }

  /**
   * Adds a default user for the application
   * @param none
   * @returns `void`
   */
  private defaultUser(): void {
    localStorage.setItem(
      'user',
      JSON.stringify({
        user: '',
        loggedIn: false,
        errorMessage: '',
        hasError: false,
      })
    );
  }
}
