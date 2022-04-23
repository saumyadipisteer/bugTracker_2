import { createReducer, on } from '@ngrx/store';
import { Description } from '../../interface/description';
import { addReport, deleteReport, updateReport } from './report.action';

export const initialReportValue: Description[] = [];

export const reportReducer = createReducer(
  initialReportValue,
  on(addReport, (state, { report }) => {
    return [report, ...state];
  }),
  on(updateReport, (state, { report, rIndex }) => {
    return state.map((value, index) =>
      index === rIndex ? { ...value, ...report } : value
    );
  }),
  on(deleteReport, (state, { rIndex }) => {
    let newState = [...state];
    newState.splice(rIndex, 1);
    return newState;
  })
);
