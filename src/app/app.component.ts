import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonService } from './shared/services/common.service';
import { addReport } from './shared/store/report/report.action';
import { userLoginAction } from './shared/store/user/user.action';
import { User } from './shared/interface/user';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private commonService: CommonService,
    private joyrideService: JoyrideService
  ) {}

  ngOnInit(): void {
    this.initialNGRXStore();
    
  }

  private initialNGRXStore(): void {
    this.store.dispatch(userLoginAction({ user: this.fetchFromLocal() }));
    this.fetchAndStoreReports();
  }

  private fetchFromLocal(): User {
    return JSON.parse(localStorage?.getItem('user') || '{}');
  }

  private fetchAndStoreReports(): void {
    this.commonService.getReports().subscribe((data) => {
      if (data?.payload) {
        const report = data.payload;
        this.store.dispatch(addReport({ report }));
      }
    });
  }

  ngOnDestroy(): void {}
}
