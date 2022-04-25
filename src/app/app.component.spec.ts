import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  TourService,
  TourNgxBootstrapModule,
} from 'ngx-tour-ngx-bootstrap';
import { ToastModule, Toast } from 'primeng/toast';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CommonService } from './shared/services/common.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CommonService,
        provideMockStore({}),
        TourService,
        // TourStepTemplateService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastModule,
        TourNgxBootstrapModule.forRoot(),
      ],
      declarations: [AppComponent, NavbarComponent, MockComponent(Toast)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
