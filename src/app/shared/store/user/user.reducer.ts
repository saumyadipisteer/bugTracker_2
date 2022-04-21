import { createReducer, on } from '@ngrx/store';

import { userLoginAction, userLogout } from './user.action';

export const initialUserValue: any = {
  user: JSON.parse(localStorage.getItem('user') || '{}')?.user, // TODO- fetch from localstorage
  errorMessage: '',
  hasError: false,
  loggedIn: !!JSON.parse(localStorage.getItem('user') || '{}')?.loggedIn,
};

export const userReducer = createReducer(
  initialUserValue,
  on(userLoginAction, (state, { user }) => ({
    ...state,
    ...user,
  })),
  on(userLogout, (state, { data }) => ({
    ...state,
    ...data,
  }))
);
