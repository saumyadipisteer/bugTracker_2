import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, tap } from 'rxjs';
import { UserService } from '../services/user.service';
import { userActionType } from './user.action';

@Injectable()
export class LoginEffects {
  login$: Observable<any>;

  constructor(private actions$: Actions, private userService: UserService) {
    this.login$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(userActionType.LOGIN),
          tap((action) => {
              localStorage.setItem('user',JSON.stringify(action['user']))
              
          })
        ),
      { dispatch: false }
    );
  }
}
