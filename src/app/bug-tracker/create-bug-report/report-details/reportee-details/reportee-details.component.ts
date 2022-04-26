import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reportee-details',
  templateUrl: './reportee-details.component.html',
  styleUrls: ['./reportee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReporteeDetailsComponent implements OnInit {
  @Input() isFixing: boolean; 
  @Output() dueDate: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  date: '';


  ngOnInit(): void {
  }

  onSelection(){
    this.dueDate.emit(this.date)
  }

}
