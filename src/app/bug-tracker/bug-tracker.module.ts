import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugTrackerRoutingModule } from './bug-tracker-routing.module';
import { BugTrackerComponent } from './bug-tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const primeng = [
  ButtonModule,
  InputTextModule,
  InputNumberModule,
  CardModule,
  DropdownModule,
  CalendarModule,
  InputTextareaModule,
  DynamicDialogModule
];

@NgModule({
  declarations: [
    BugTrackerComponent
  ],
  imports: [
    CommonModule,
    BugTrackerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BugTrackerModule { }
