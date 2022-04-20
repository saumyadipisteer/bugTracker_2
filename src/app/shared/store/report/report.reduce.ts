import { createReducer, on } from '@ngrx/store';
import { Description } from '../../interface/description'; 
import { addReport } from './report.action';

export const initialReportValue: Description[] = [];

export const reportReducer = createReducer(
  initialReportValue,
  on(addReport, (state, { report }) => {
    return [...state, ...report]
  }),

);
