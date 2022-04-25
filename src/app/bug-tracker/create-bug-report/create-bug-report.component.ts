import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportService } from '../services/report.service';
import { currentUsersReportSelector } from '../state/report/report.selector';
import { TourService } from 'ngx-tour-ngx-bootstrap';

@Component({
  selector: 'app-create-bug-report',
  templateUrl: './create-bug-report.component.html',
  styleUrls: ['./create-bug-report.component.scss'],
})
export class BugReportComponent implements OnInit, OnDestroy {
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
      taggedBy: {
        label: 'Will fix this',
        field: 'taggedBy',
        required: false,
        disabled: false,
      },
    },
    optionalDetails: {
      dueDate: {
        label: 'Due date',
        field: 'dueDate',
        required: true,
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
    private reportService: ReportService,
    private tourService: TourService
  ) {}
  description: any;
  type: string;
  index: number;
  ngOnInit(): void {
    this.description = this.config.data?.report;
    this.type = this.config.data?.type;
    this.index = this.config.data?.index;
    this.statusOptions = this.type
      ? ['Open', 'TBD', 'Closed', 'In-Progress']
      : ['Open', 'TBD'];
    // this.store
    //   .pipe(select(currentUsersReportSelector('twomegabyte')))
    //   .subscribe((data) => console.log(data)); TODO - Use it on my reports

    if (!this.type) {
      this.tourService.initialize([
        {
          anchorId: 'report.subject',
          content: 'Subject of the report must be entered',
          title: 'Subject',
          endBtnTitle: 'Done',
          route: 'bug/createReport',
          containerClass: 'custom-popover',
          placement: 'left',
        },
        {
          anchorId: 'report.severity',
          content:
            'Another mandatory field, with options like low, medium and high',
          endBtnTitle: 'Done',
          containerClass: 'custom-popover',
          title: 'Severity',
          route: 'bug/createReport',
          placement: 'left',
        },
        {
          anchorId: 'report.status',
          content: 'For setting the current status of the report',
          endBtnTitle: 'Done',
          title: 'Status',
          containerClass: 'custom-popover',
          route: 'bug/createReport',
          placement: 'left',
        },
        {
          anchorId: 'report.describe',
          content: 'Not mandetory, but a bug can be described',
          endBtnTitle: 'Done',
          title: 'Report description',
          containerClass: 'custom-popover',
          route: 'bug/createReport',
          placement: 'left',
        },
        {
          anchorId: 'report.submit',
          content: 'Hit submit, after filling the form',
          endBtnTitle: 'Done',
          title: 'Submit',
          containerClass: 'custom-popover',
          route: 'bug/createReport',
          placement: 'top',
          preventScrolling: true,
        },
      ]);

      this.tourService.start();
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {}
}
