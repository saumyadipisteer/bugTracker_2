import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Description } from '../../interface/description';
import { ReportService } from '../../services/report.service';
import { reportActionType } from './report.action';

@Injectable()
export class ReportsEffect {
  addReport$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(reportActionType.addReport),
        tap((action) => {
          console.log(action["report"])
          // this.reportService
          // .postData(action["report"])
          // .subscribe((data) => {
          // });
        })
      ),
    { dispatch: false }
  );
  constructor(private action$: Actions, private reportService: ReportService) {}
}
