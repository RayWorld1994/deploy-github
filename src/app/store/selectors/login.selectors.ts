import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ILoginState } from '../state/login.state';

export const getLoginState = (state: IAppState) => state.login;

export const getUser = createSelector(
  getLoginState,
  (state: ILoginState) => state.user
);
