import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Description } from "../../interface/description"; 

export const reportFeatureSelector = createFeatureSelector<Description[]>("reports");

export const reportSelector = createSelector(
    reportFeatureSelector,
    (report)=> report
)