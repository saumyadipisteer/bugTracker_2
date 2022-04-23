import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'reportee-details',
  templateUrl: './reportee-details.component.html',
  styleUrls: ['./reportee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReporteeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
