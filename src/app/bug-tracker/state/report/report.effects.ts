import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Description } from '../../interface/description';
import { reportActionType } from './report.action';

@Injectable()
export class ReportsEffect {
  addReports$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(reportActionType.addReport),
        tap((action) => {
          console.log(action)
          const reports: Description[] = JSON.parse(
            localStorage.getItem('reports') || '[]'
          );
        })
      ),
    { dispatch: false }
  );
  constructor(private action$: Actions) {}
}
