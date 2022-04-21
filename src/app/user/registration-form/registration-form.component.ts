import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonService } from 'src/app/shared/services/common.service';
import { UserService } from '../services/user.service';
import { userLoginAction } from '../state/user.action';
// import { Fields } from 'src/app/interface/report';
// import { UserCredentials } from 'src/app/interface/user';
// import { UserService } from 'src/app/services/user.service';

function oneSymbol(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (!(control.value as string)?.match(/[`~!@#$%^&*\(\)/\\-_+=;:"'<>,.?]/gm)) {
    return { oneSymbolRequired: true };
  }
  return null;
}

function oneCapital(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (!(control.value as string)?.match(/[A-Z]/gm)) {
    return { oneCapitalRequired: true };
  }
  return null;
}

function oneNumeric(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (!(control.value as string)?.match(/[\d]/gm)) {
    return { oneNumericRequired: true };
  }
  return null;
}

function passLength(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (
    !(control.value as string)?.match(
      /[a-zA-Z0-9`~!@#$%^&*()_-|+={}[\]<>,.?\/"']{8,}/gm
    )
  ) {
    return { passLength: true };
  }
  return null;
}

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  formLabel: string = 'Sign Up';

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
    confirmPassword: {
      field: 'confirmPassword',
      label: 'Confirm Password',
      disabled: false,
      required: true,
    },
  };

  fg: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.fg = this.createForm();
    this.fg.controls['password'].setValidators([
      oneCapital,
      oneNumeric,
      oneSymbol,
      passLength,
    ]);
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

  /**
   * Checks for error in password field
   * @param errorName `string`
   * @returns `boolean`
   */
  hasError(errorName: string): boolean {
    return this.fg.controls['password'].hasError(errorName);
  }

  onSubmit(): void {
    this.fg.markAllAsTouched();
    let user: any;
    this.userService
      .postNewUser({
        username: this.fg.getRawValue().username,
        password: this.fg.getRawValue().password,
      })
      .subscribe((data) => {
        
        if (data?.payload) {
          user = data?.payload;
          this.commonService.checkUser.next(true);
          this.store.dispatch(userLoginAction({ user }));
          this.router.navigate(['']);
        }
      });
    this.fg.reset();
  }
}
