import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { BugListTableComponent } from './bug-list-table.component';

describe('BugListTableComponent', () => {
  let component: BugListTableComponent;
  let fixture: ComponentFixture<BugListTableComponent>;
  const initialState = { loggedIn: false }; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugListTableComponent],
      providers: [provideMockStore({ initialState })],
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
