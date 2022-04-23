import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugListTableComponent } from './bug-list/bug-list-table/bug-list-table.component';
import { BugListComponent } from './bug-list/bug-list.component';

import { BugTrackerComponent } from './bug-tracker.component';
import { BugReportComponent } from './create-bug-report/create-bug-report.component';
import { ReportDetailsComponent } from './create-bug-report/report-details/report-details.component';
import { ReporteeDetailsComponent } from './create-bug-report/report-details/reportee-details/reportee-details.component';
import { ReportService } from './services/report.service';

describe('BugTrackerComponent', () => {
  let component: BugTrackerComponent;
  let fixture: ComponentFixture<BugTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BugTrackerComponent,
        BugReportComponent,
        ReportDetailsComponent,
        BugListComponent,
        BugListTableComponent,
        ReporteeDetailsComponent,
      ],
      providers:[ReportService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
