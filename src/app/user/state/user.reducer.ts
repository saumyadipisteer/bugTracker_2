import { createReducer, on } from '@ngrx/store';
import { User, UserState } from '../interface/user';
import {
  userLoginAction,
  userActionType,
  userLoginErrorAction,
  userLoginCompleteAction,
} from './user.action';

export const initialUserValue: UserState = {
  user: { password: '', username: '' },
  errorMessage: '',
  hasError: false,
  isLoggedIn: false,
  isLoading: false,
};

export const userReducer = createReducer(
  initialUserValue,
  on(userLoginAction, (state, { user }) => ({
    ...state,
    user: user,
    isLoading: true,
  })),
  on(userLoginErrorAction, (state, { message }) => ({
    ...state,
    errorMessage: message,
    hasError: true,
    isLoading: false
  })),
  on(userLoginCompleteAction, (state, { data }) => ({
    ...state,
    user: data,
    isLoggedIn: true,
    isLoading: false
  })),
);
