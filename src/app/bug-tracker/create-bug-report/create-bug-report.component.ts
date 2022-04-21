import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportService } from '../services/report.service';
import { currentUsersReportSelector } from '../state/report/report.selector';


@Component({
  selector: 'app-create-bug-report',
  templateUrl: './create-bug-report.component.html',
  styleUrls: ['./create-bug-report.component.scss'],
})
export class BugReportComponent implements OnInit {
  fields: any = {
    details: {
      subject: {
        label: 'Subject',
        field: 'subject',
        required: true,
        disabled: false,
      },
      severity: {
        label: 'Severity',
        field: 'severity',
        required: true,
        disabled: false,
      },
      status: {
        label: 'Status',
        field: 'severity',
        required: true,
        disabled: false,
      },
      describeTheBug: {
        label: 'Describe the bug',
        field: 'describeTheBug',
        required: false,
        disabled: false,
      },
    },
  };
  severityOptions: string[] = ['Low', 'Medium', 'High']; //- TODO: must come from an API
  statusOptions: string[] = ['Open', 'TBD']; //- TODO: More option for depending on role
  constructor(
    private config: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private store: Store,
    private reportService: ReportService
  ) {}
  description: any;
  type: string;
  index: number;
  ngOnInit(): void {
    this.description = this.config.data?.report;
    this.type = this.config.data?.type;
    this.index = this.config.data?.index;
    this.store.pipe(select(currentUsersReportSelector('twomegabyte'))).subscribe(data=>console.log(data))
  }

  closeModal() {
    this.dialogRef.close();
  }
}
