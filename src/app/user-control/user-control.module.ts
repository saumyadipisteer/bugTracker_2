import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserHomeComponent,
        children:[
          {
            path:'reports',
            component: UserReportsComponent
          },
          {
            path:'account',
            component: UserAccountComponent
          },
          {
            path:'profile',
            component: UserProfileComponent
          },
          {
            path:'notification',
            component: UserNotificationComponent
          }
        ]
      }
    ]),
  ],
})
export class UserControlModule {}
