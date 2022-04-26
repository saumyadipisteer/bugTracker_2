import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TourService } from 'ngx-tour-ngx-bootstrap';
import { map, Observable, of } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private commonService: CommonService, private tourService: TourService) {}
  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    //this.defaultUser();
    this.isLoggedIn$ = this.commonService.loginStatus$;
    this.tourService.initialize([
      {
        anchorId: 'report.createReport',
        content: 'Click to start a report',
        title: 'Create report',
        route: '',
        containerClass: 'custom-popover mySelector',
        placement: 'left',
      },
      {
        anchorId: 'report.subject',
        content: 'Subject of the report must be entered',
        title: 'Subject',
        endBtnTitle: 'Done',
        route: 'bug/createReport',
        containerClass: 'custom-popover',
        placement: 'left',
      },
      {
        anchorId: 'report.severity',
        content:
          'Another mandatory field, with options like low, medium and high',
        endBtnTitle: 'Done',
        containerClass: 'custom-popover',
        title: 'Severity',
        route: 'bug/createReport',
        placement: 'left',
      },
      {
        anchorId: 'report.status',
        content: 'For setting the current status of the report',
        endBtnTitle: 'Done',
        title: 'Status',
        containerClass: 'custom-popover',
        route: 'bug/createReport',
        placement: 'left',
      },
      {
        anchorId: 'report.describe',
        content: 'Not mandetory, but a bug can be described',
        endBtnTitle: 'Done',
        title: 'Report description',
        containerClass: 'custom-popover',
        route: 'bug/createReport',
        placement: 'left',
      },
      {
        anchorId: 'report.submit',
        content: 'Hit submit, after filling the form',
        endBtnTitle: 'Done',
        title: 'Submit',
        containerClass: 'custom-popover',
        route: 'bug/createReport',
        placement: 'top',
        preventScrolling: false,
      },
    ]);

    this.tourService.start();
  }
  
  /**
   * Adds a default user for the application
   * @param none
   * @returns `void`
   */
  private defaultUser(): void {
    localStorage.setItem(
      'user',
      JSON.stringify({
        user: '',
        loggedIn: false,
        errorMessage: '',
        hasError: false,
      })
    );
  }
}
