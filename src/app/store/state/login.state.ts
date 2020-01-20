import { TokenUser } from 'src/app/modules/login/models/token-user.model';

export interface ILoginState {
  user: TokenUser;
  error: any;
}

export const initialLoginState: ILoginState = {
  user: null,
  error: null,
};
