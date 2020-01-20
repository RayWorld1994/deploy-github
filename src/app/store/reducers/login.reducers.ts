import { GetLogoutSuccesAction } from './../actions/login.actions';
import { ILoginState, initialLoginState } from '../state/login.state';
import { LoginActions, ELoginActions } from '../actions/login.actions';

export function LoginReducer(
  state: ILoginState = initialLoginState,
  action: LoginActions
): ILoginState {
  switch (action.type) {
    case ELoginActions.GetLoginSuccess: {
      const { user } = action.payload;
      return { ...state, user, error: null };
    }
    case ELoginActions.GetLoginFailure: {
      const { error } = action.payload;
      return { ...state, error };
    }
    case ELoginActions.GetLogoutSuccess: {
      return { ...state, user: null, error: null };
    }
    default:
      return state;
  }
}
