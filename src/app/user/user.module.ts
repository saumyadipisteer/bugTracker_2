import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/user.effects';

const primengModule = [
  InputTextModule,
  ToastModule,
  ButtonModule,
  PasswordModule,
];
@NgModule({
  declarations: [UserComponent, LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...primengModule,
    HttpClientModule,
    StoreModule.forFeature('login', userReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class UserModule {
  // static forRoot(): ModuleWithProviders<any> {
  //   return {
  //     ngModule: UserModule,
  //     providers: [AuthGuard],
  //   };
  // }
}
