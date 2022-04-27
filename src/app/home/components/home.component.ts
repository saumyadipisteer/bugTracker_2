import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { JoyrideService } from 'ngx-joyride';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store,
    private commonService: CommonService,
    private joyrideService: JoyrideService,
    private router: Router
  ) {}
  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    //this.defaultUser();
    this.isLoggedIn$ = this.commonService.loginStatus$;
    this.joyrideService
      .startTour({
        steps: [
          'welcome',
          'reportForm',
          'subject@bug/createReport',
          'severity@bug/createReport',
          'status@bug/createReport',
          'describeTheBug@bug/createReport',
        ],
        themeColor:'#d3d3d3'
      })
      
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
