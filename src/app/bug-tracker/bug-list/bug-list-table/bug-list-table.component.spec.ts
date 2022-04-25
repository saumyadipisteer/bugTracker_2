import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ConfirmationService } from 'primeng/api';
import { ReportService } from '../../services/report.service';

import { BugListTableComponent } from './bug-list-table.component';

describe('BugListTableComponent', () => {
  let component: BugListTableComponent;
  let fixture: ComponentFixture<BugListTableComponent>;
  const initialState = { loggedIn: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugListTableComponent],
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
        ConfirmationService,
        ReportService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
