import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Recipe } from 'src/app/interface/user';
import { ConfirmationService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { BugReportComponent } from '../../create-bug-report/create-bug-report.component';
import { ReportService } from '../../services/report.service';
import { descriptionAction } from '../../state/description/description.action';
// import { IngredientListComponent } from '../../ingredient/ingredient-list/ingredient-list.component';
// import { ReportService } from 'src/app/services/report.service';
// import { Report } from 'src/app/interface/report';
// import { CreateBugReportComponent } from 'src/app/private/create-bug-report/create-bug-report.component';
// import { Store } from '@ngrx/store';
// import { descriptionSelector } from 'src/app/private/state/description/description.selector';
// import { Observable } from 'rxjs';
// import { Description } from 'src/app/private/interface/description';
// import { addReport } from 'src/app/state/report-state/report.action';
// import { descriptionAction } from 'src/app/private/state/description/description.action';

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
  constructor(
    private dialogService: DialogService,
    private reportService: ReportService,
    private store: Store,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.reportService.getReports().subscribe((reports) => {
      this.reports = reports['payload'];
    });
  }

  viewBugReport(description: any, index: number) {
    this.store.dispatch(descriptionAction({ description }));
    this.ref = this.dialogService.open(BugReportComponent, {
      width: '40%',
      showHeader: false,
      data: { report: description, type: 'update', index: index },
      baseZIndex: 999999999,
    });
    this.ref.onClose.subscribe(() => {
      this.reportService.getReports().subscribe((reports) => {
        this.reports = reports['payload'];
        console.log(reports);
      });
    });
  }

  confirmDelete(index: number): void {
    this.confirmService.confirm({
      message: 'Are you sure you want to delete this report?',
      accept: () => {
        this.reportService.deleteReport(index).subscribe()
        
      },
    });
  }
}
