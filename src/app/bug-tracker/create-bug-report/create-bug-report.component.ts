import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportService } from '../services/report.service';
import { descriptionSelector } from '../state/description/description.selector';
// import { WidgetField } from '../interface/common';
// import { Description } from '../interface/description';
// import { descriptionSelector } from '../state/description/description.selector';

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
  severityOptions: string[] = ['--Select--', 'Low', 'Medium', 'High']; //- TODO: must come from an API
  statusOptions: string[] = ['--Select--', 'Open', 'TBD']; //- TODO: More option for depending on role
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
  
  }

  closeModal() {
    this.dialogRef.close();
  }
}
