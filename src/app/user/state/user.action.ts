import { createAction, props } from "@ngrx/store";
import { User } from "../interface/user";

export enum userActionType {
    LOGIN = "[USER] LOGIN",
    LOGIN_COMPLETE = "[USER] LOGIN COMPLETE",
    LOGIN_ERROR = "[USER] LOGIN ERROR",
    LOGGEDOUT = "[USER] LOGGEDOUT",
    NEWUSER = "[USER] CREATED", 
}

export const userLoginAction = createAction(
    userActionType.LOGIN,
    props<{user:User}>()
)

export const userLoginErrorAction = createAction(
    userActionType.LOGIN_ERROR,
    props<{message:string}>()
)

export const userLoginCompleteAction = createAction(
    userActionType.LOGIN_COMPLETE,
    props<{data: any}>()
)

