import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonService } from './shared/services/common.service';
import { addReport } from './shared/store/report/report.action';
import { userLoginAction } from './shared/store/user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bug-tracker';
  constructor(private store: Store, private commonService: CommonService) {}

  ngOnInit(): void {
    this.initialNGRXStore();
  }

  private initialNGRXStore():void{
    this.fetchFromLocal();
    this.fetchAndStoreReports();
  }

  private fetchFromLocal(): void {
    const user = JSON.parse(localStorage?.getItem('user') || '{}');
    this.store.dispatch(userLoginAction({ user }));
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
