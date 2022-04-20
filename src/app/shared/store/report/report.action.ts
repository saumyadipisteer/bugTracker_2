import { createAction, props } from '@ngrx/store';
import { Description } from '../../interface/description';

export enum reportActionType {
  addReport = '[REPORTS] INITIALIZED',
}

export const addReport = createAction(
  reportActionType.addReport,
  props<{ report: any[] }>()
);



