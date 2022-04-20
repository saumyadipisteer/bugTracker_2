import { createAction, props } from '@ngrx/store';
import { Description } from '../../interface/description';

export enum reportActionType {
  addReport = '[REPORT] ADDED',
  updateReport = '[REPORT] UPDATED',
  deleteReport = '[REPORT] DELETED',
}

export const addReport = createAction(
  reportActionType.addReport,
  props<{ report: Description }>()
);

export const updteReport = createAction(
  reportActionType.updateReport,
  props<{ report: Description, index: number}>()
)

export const deleteReport = createAction(
  reportActionType.deleteReport,
  props<{ index: number }>()
);

