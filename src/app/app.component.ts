import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonService } from './shared/services/common.service';
import { addReport } from './shared/store/report/report.action';
import { userLoginAction } from './shared/store/user/user.action';
import { TourService } from 'ngx-tour-md-menu';
import { User } from './shared/interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bug-tracker';
  constructor(
    private store: Store,
    private commonService: CommonService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.initialNGRXStore();

    this.tourService.initialize([
      {
        anchorId: 'report.subject',
        content: 'A mandatory field',
        title: 'Subject',
        endBtnTitle: 'Done',
        route: 'bug/createReport',

        preventScrolling: false,
      },
      {
        anchorId: 'report.severity',
        content:
          'Another mandatory field, with options like low, medium and high',
        endBtnTitle: 'Done',
        title: 'Severity',
        route: 'bug/createReport',
      },
      {
        anchorId: 'report.status',
        content: 'Another mandatory field',
        endBtnTitle: 'Done',
        title: 'Status',
        route: 'bug/createReport',
      },
      {
        anchorId: 'report.describe',
        content: 'Not mandetory, but a bug can be described',
        endBtnTitle: 'Done',
        title: 'Report description',
        route: 'bug/createReport',
        placement: 'below',
      },
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
