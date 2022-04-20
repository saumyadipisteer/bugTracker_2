import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugReportComponent } from './create-bug-report/create-bug-report.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'list',
    component: BugListComponent
  },
  {
    path:'createReport',
    component: BugReportComponent,
    canActivate: [AuthGuard]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugTrackerRoutingModule { }
