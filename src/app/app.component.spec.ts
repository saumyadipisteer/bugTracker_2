import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TourService, TourStepTemplateComponent } from 'ngx-tour-ngx-bootstrap';
import { ToastModule, Toast } from 'primeng/toast';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CommonService } from './shared/services/common.service';
import { TourStepTemplateService } from 'ngx-tour-ngx-bootstrap/lib/tour-step-template.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CommonService,
        provideMockStore({}),
        TourService,
        // TourStepTemplateService,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, ToastModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        // ]
        MockComponent(Toast),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bug-tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bug-tracker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Bug-tracker app is running!'
    );
  });
});
