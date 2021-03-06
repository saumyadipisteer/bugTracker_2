import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Subscription,
} from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { Fields } from '../../interface/common';
import { Description } from '../../interface/description';
import { ReportService } from '../../services/report.service';
import { descriptionAction } from '../../state/description/description.action';
import { initialBugDescriptionValue } from '../../state/description/description.reducer';
import { addReport, updateReport } from '../../state/report/report.action';

@Component({
  selector: 'report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  providers: [],
})
export class ReportDetailsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() severityOptions: string[];
  @Input() statusOptions: string[];
  @Input() fields: Fields;
  @Input() description: Description;
  @Input() type: string;
  @Input() index: number;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('subject') subjectField: ElementRef;
  @ViewChild('status') statusField: ElementRef;
  private _subscription: Subscription = new Subscription();

  fg: FormGroup;
  constructor(
    private store: Store,
    private router: Router,
    private reportService: ReportService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.fg = this.createForm();

    if (this.description) {
      this.fg.patchValue(this.description);
    }
  }

  ngAfterViewInit(): void {
    this._updateSubjectStore();
  }

  /**
   * @description on every key store or paste the store will get update
   * @returns `void`
   */
  private _updateSubjectStore(): void {
    const inputField = this.subjectField?.nativeElement as HTMLInputElement;
    const keyUp$ = fromEvent<any>(inputField, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged()
    );

    this._subscription.add(
      keyUp$.subscribe((value) => {
        let description: Description = this.fg.getRawValue();
        this.store.dispatch(descriptionAction({ description }));
      })
    );
  }

  /**
   * @description on every key store or paste the store will get update
   * @returns `void`
   */
  updateDescriptionStore(value: string): void {
    let description: Description = this.fg.getRawValue();
    this.store.dispatch(descriptionAction({ description }));
  }

  /**
   * @description Creates a form with null value and required validators by default
   * @param none
   * @returns `FormGroup`
   */
  private createForm(): FormGroup {
    const control = {};
    Object.keys(this.fields).forEach((field) => {
      control[field] = [
        { value: null, disabled: this.fields[field]?.disabled },
      ];
      this.fields[field]?.required
        ? Validators.required
        : Validators.nullValidator;
    });
    return new FormBuilder().group(control);
  }

  /**
   * Does things on submitting form value
   * @returns `void`
   */
  onSubmit(): void {
    this.fg.markAllAsTouched();
    const report = this._generateData(this.fg.getRawValue());
    if (!this.fg.invalid) {
      this._resetForm();
      if (this.type === 'update') {
        this.store.dispatch(
          updateReport({ report: report, rIndex: this.index })
        );
        this.closeModal.emit(true);
      } else {
        this.store.dispatch(addReport({ report }));
      }
      this.router.navigate(['bug/list']);
    }
  }

  /**
   * Resets form and store
   * @returns `void`
   */
  private _resetForm(): void {
    this.fg.reset();
    const description = initialBugDescriptionValue;
    this.store.dispatch(descriptionAction({ description }));
  }

  /**
   * Generates final data for the report
   * @param data `Description`
   * @returns `Description`
   */
  private _generateData(data: any): any {
    let user: string | undefined = JSON.parse(
      localStorage.getItem('user') || '{}'
    )?.user;

    return {
      subject: data.subject,
      status: data.status,
      severity: data.severity,
      describeTheBug: data.describeTheBug,
      user: user,
      createdOn: this.commonService.generateDate(),
    };
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
