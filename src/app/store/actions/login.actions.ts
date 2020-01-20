import { Action } from '@ngrx/store';
import { ActionFailurePayload } from 'src/app/modules/home/models/errors.model';
import { UserAuthentication } from 'src/app/modules/login/models/user-authentication.model';
import { TokenUser } from 'src/app/modules/login/models/token-user.model';

export enum ELoginActions {
  GetLogin = '[Login] Get Login',
  GetLoginFailure = '[Login] Get Login Failure',
  GetLoginSuccess = '[Login] Get Login Success',
  GetLogout = '[Logout] Get Logout',
  GetLogoutSuccess = '[Logout] Get Logout Succes',
}

interface ILoginPayload {
  user: UserAuthentication;
}

export class GetLoginAction implements Action {
  public readonly type = ELoginActions.GetLogin;
  public payload: ILoginPayload;
  constructor(user: UserAuthentication) {
    this.payload = { user };
  }
}

interface ILoginSuccessPayload {
  user: TokenUser;
}

export class GetLoginSuccessAction implements Action {
  public readonly type = ELoginActions.GetLoginSuccess;
  public payload: ILoginSuccessPayload;
  constructor(user: TokenUser) {
    this.payload = { user };
  }
}

export class GetLoginFailureAction implements Action {
  public readonly type = ELoginActions.GetLoginFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

export class GetLogoutAction implements Action {
  public readonly type = ELoginActions.GetLogout;
}

export class GetLogoutSuccesAction implements Action {
  public readonly type = ELoginActions.GetLogoutSuccess;
}

export type LoginActions =
  | GetLoginAction
  | GetLoginSuccessAction
  | GetLoginFailureAction
  | GetLogoutAction
  | GetLogoutSuccesAction;
