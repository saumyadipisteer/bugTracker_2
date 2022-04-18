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
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { BugReportComponent } from './create-bug-report/create-bug-report.component';
import { ReportDetailsComponent } from './create-bug-report/report-details/report-details.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugListTableComponent } from './bug-list/bug-list-table/bug-list-table.component';

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
];

@NgModule({
  declarations: [
    BugTrackerComponent,
    BugReportComponent,
    ReportDetailsComponent,
    BugListComponent,
    BugListTableComponent,
  ],
  imports: [
    CommonModule,
    BugTrackerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...primengModule,
  ],
})
export class BugTrackerModule {}
