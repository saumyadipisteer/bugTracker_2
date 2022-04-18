import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugTrackerRoutingModule } from './bug-tracker-routing.module';
import { BugTrackerComponent } from './bug-tracker.component';


@NgModule({
  declarations: [
    BugTrackerComponent
  ],
  imports: [
    CommonModule,
    BugTrackerRoutingModule
  ]
})
export class BugTrackerModule { }
