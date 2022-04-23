import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/shared/services/common.service';
import { BugReportComponent } from '../../create-bug-report/create-bug-report.component';
import { ReportService } from '../../services/report.service';
import { descriptionAction } from '../../state/description/description.action';
import { deleteReport } from '../../state/report/report.action';

@Component({
  selector: 'bug-list-table',
  templateUrl: './bug-list-table.component.html',
  styleUrls: ['./bug-list-table.component.scss'],
  providers: [DialogService, DynamicDialogConfig],
})
export class BugListTableComponent implements OnInit {
  description: any;
  reports: any[];
  ref: DynamicDialogRef;
  currentUser: string | undefined;
  constructor(
    private dialogService: DialogService,
    private store: Store,
    private confirmService: ConfirmationService,
    private reportService: ReportService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.commonService.curretUser$.subscribe((username) => {
      this.currentUser = username;
    });
    this.store.subscribe((store) => {
      this.reports = store['report'];
    });
  }

  viewBugReport(description: any, index: number) {
    this.store.dispatch(descriptionAction({ description }));
    this.ref = this.dialogService.open(BugReportComponent, {
      width: '490px',

      header: 'Update',
      data: { report: description, type: 'update', index: index },
      baseZIndex: 999999999,
    });
  }

  confirmDelete(index: number): void {
    this.confirmService.confirm({
      header: 'Delete confirmation',
      message: 'Are you sure you want to delete this report?',
      accept: () => {
        this.store.dispatch(deleteReport({ rIndex: index }));
      },
    });
  }
}
