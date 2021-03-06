import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListComponent } from './bug-list.component';

describe('RecipeListComponent', () => {
  let component: BugListComponent;
  let fixture: ComponentFixture<BugListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
