import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { Description } from '../../interface/description';

export const reportFeatureSelector =
  createFeatureSelector<Description[]>('report');

export const reportsSelector = createSelector(
  reportFeatureSelector,
  (report) => report
);

export const currentUsersReportSelector = (currentUser: string) =>
  createSelector(reportFeatureSelector, (report) =>
    report.filter((data) => {
      return data.user === currentUser;
    })
  );
