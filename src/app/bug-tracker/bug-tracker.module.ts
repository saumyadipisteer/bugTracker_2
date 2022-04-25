import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugTrackerRoutingModule } from './bug-tracker-routing.module';
import { BugTrackerComponent } from './bug-tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import {
  DynamicDialogConfig,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { BugReportComponent } from './create-bug-report/create-bug-report.component';
import { ReportDetailsComponent } from './create-bug-report/report-details/report-details.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugListTableComponent } from './bug-list/bug-list-table/bug-list-table.component';
import { StoreModule } from '@ngrx/store';
import { descriptionReducer } from './state/description/description.reducer';
import { reportReducer } from './state/report/report.reduce';
import { ConfirmationService } from 'primeng/api';
import { EffectsModule } from '@ngrx/effects';
import { ReportsEffect } from './state/report/report.effects';
import { ReporteeDetailsComponent } from './create-bug-report/report-details/reportee-details/reportee-details.component';
// import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';

const primengModule = [
  ButtonModule,
  InputTextModule,
  InputNumberModule,
  CardModule,
  DropdownModule,
  TableModule,
  CalendarModule,
  InputTextareaModule,
  DynamicDialogModule,
  OverlayPanelModule,
  ConfirmDialogModule,
  CheckboxModule,
];

@NgModule({
  declarations: [
    BugTrackerComponent,
    BugReportComponent,
    ReportDetailsComponent,
    BugListComponent,
    BugListTableComponent,
    ReporteeDetailsComponent,
  ],
  imports: [
    CommonModule,
    BugTrackerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...primengModule,
    StoreModule.forFeature('description', descriptionReducer),
    StoreModule.forFeature('report', reportReducer),
    EffectsModule.forFeature([ReportsEffect]),
    TourNgxBootstrapModule
  ],
  providers: [DynamicDialogConfig, DynamicDialogRef, ConfirmationService],
})
export class BugTrackerModule {}
