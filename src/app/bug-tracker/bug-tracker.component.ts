import { Component, OnInit } from '@angular/core';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

}
