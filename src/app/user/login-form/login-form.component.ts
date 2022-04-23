import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { UserState } from '../interface/user';

// import { Fields } from 'src/app/interface/report';
import { CommonService } from '../../shared/services/common.service';
import { UserService } from '../services/user.service';
import { userLoginAction } from '../state/user.action';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [MessageService],
})
export class LoginFormComponent implements OnInit {
  fields: any = {
    username: {
      field: 'username',
      label: 'Username',
      disabled: false,
      required: true,
    },
    password: {
      field: 'password',
      label: 'Password',
      disabled: false,
      required: true,
    },
  };

  fg: FormGroup;
  private _isValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isValid$ = this._isValid$.asObservable();
  revealPassword: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private commonService: CommonService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.fg = this.createForm();
  }

  /**
   * Creates a null value form with required validator
   * @param none
   * @returns `FormGroup`
   */
  private createForm(): FormGroup {
    const controls = {};
    Object.keys(this.fields).forEach((field) => {
      controls[field] = [
        {
          value: null,
          disabled: this.fields[field]?.disabled,
        },
        [
          this.fields[field].required
            ? Validators.required
            : Validators.nullValidator,
        ],
      ];
    });
    return new FormBuilder().group(controls);
  }

  /**
   *
   * @param controlName `string`
   * @returns `boolean`
   */
  isRequired(controlName: string): boolean {
    return (
      (this.fg.controls[controlName] as FormControl)?.touched &&
      (this.fg.controls[controlName].value === null ||
        this.fg.controls[controlName].value === '')
    );
  }

  onSubmit(): void {
    this.fg.markAllAsTouched();
    let user: UserState;
    this.userService.postUserData(this.fg.getRawValue()).subscribe((data) => {
      user = data?.payload;
      if (user) {
        this.store.dispatch(userLoginAction({ user }));
        this.commonService.checkUser.next(true);
        this.commonService.getCurrentUser.next(user.user)
        this.fg.reset();
        this.router.navigate(['']);
      } else {
        this._isValid$.next(true);
      }
    });
  }
}
