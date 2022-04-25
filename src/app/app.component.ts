import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonService } from './shared/services/common.service';
import { addReport } from './shared/store/report/report.action';
import { userLoginAction } from './shared/store/user/user.action';
import { TourService } from 'ngx-tour-ngx-bootstrap';
import { User } from './shared/interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private commonService: CommonService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.initialNGRXStore();

    this.tourService.initialize([
      {
        anchorId: 'report.createReport',
        content: 'Click to start a report',
        title: 'Create report',
        route: '',
        containerClass: 'custom-popover',
        placement: 'left',
      }
    ]);
    this.tourService;
    this.tourService.start();
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
