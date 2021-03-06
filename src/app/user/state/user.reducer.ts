import { createReducer, on } from '@ngrx/store';
import { User, UserState } from '../interface/user';
import {
  userLoginAction,
  userActionType,
  userLoginErrorAction,
  userLoginCompleteAction,
  userLogout,
} from './user.action';

export const initialUserValue: UserState = {
  user: '', // TODO- fetch from localstorage
  errorMessage: '',
  hasError: false,
  loggedIn: false,
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
