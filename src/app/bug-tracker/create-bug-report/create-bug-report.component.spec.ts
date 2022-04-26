import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { CardModule, Card } from 'primeng/card';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule, Toast } from 'primeng/toast';
import { MockComponent } from 'ng-mocks';
import { BugReportComponent } from './create-bug-report.component';
import { ReportService } from '../services/report.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { TourService } from 'ngx-tour-ngx-bootstrap';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateBugReportComponent', () => {
  let component: BugReportComponent;
  let fixture: ComponentFixture<BugReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BugReportComponent,
        MockComponent(Card),
        MockComponent(Toast),
        MockComponent(Calendar),
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        CardModule,
        ToastModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        DynamicDialogConfig,
        DynamicDialogRef,
        provideMockStore({}),
        ReportService,
        TourService,
        
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   
  });
});
