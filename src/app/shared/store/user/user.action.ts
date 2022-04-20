import { createAction, props } from "@ngrx/store";
import { User } from "src/app/user/interface/user";

export enum userActionType {
    LOGIN = "[USER] LOGIN",
    LOGIN_COMPLETE = "[USER] LOGIN COMPLETE",
    LOGIN_ERROR = "[USER] LOGIN ERROR",
    LOGGEDOUT = "[USER] LOGGEDOUT",
    NEWUSER = "[USER] CREATED", 
}

export const userLoginAction = createAction(
    userActionType.LOGIN,
    props<{user:any}>()
)

export const userLogout = createAction(
    userActionType.LOGGEDOUT,
    props<{data:any}>()
)
