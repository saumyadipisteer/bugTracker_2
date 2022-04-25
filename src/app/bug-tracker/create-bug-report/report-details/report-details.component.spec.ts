import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CalendarModule, Calendar } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { CommonService } from 'src/app/shared/services/common.service';
import { MockComponent } from 'ng-mocks';

import { ReportDetailsComponent } from './report-details.component';

describe('ReportDetailsComponent', () => {
  let component: ReportDetailsComponent;
  let fixture: ComponentFixture<ReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportDetailsComponent, MockComponent(Calendar)],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        CalendarModule,
        ToastModule,
        CardModule,
      ],
      providers: [provideMockStore({}), CommonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   const fields = {
  //     details: {
  //       subject: {
  //         label: 'Subject',
  //         field: 'subject',
  //         required: true,
  //         disabled: false,
  //       },
  //       severity: {
  //         label: 'Severity',
  //         field: 'severity',
  //         required: true,
  //         disabled: false,
  //       },
  //       status: {
  //         label: 'Status',
  //         field: 'severity',
  //         required: true,
  //         disabled: false,
  //       },
  //       describeTheBug: {
  //         label: 'Describe the bug',
  //         field: 'describeTheBug',
  //         required: false,
  //         disabled: false,
  //       },
  //       taggedBy: {
  //         label: 'Will fix this',
  //         field: 'taggedBy',
  //         required: false,
  //         disabled: false,
  //       },
  //     },
  //   }
  //   expect(component).toBeTruthy();
  //   const privateForm = spyOn<any>(component,'createForm');
    
  //   expect(component['createForm']).toHaveBeenCalled()
  // });
});
