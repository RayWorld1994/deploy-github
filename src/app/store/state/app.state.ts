import { IProductState, initialProductState } from './products.state';
import { ILoginState, initialLoginState } from './login.state';
import { ICartState, initialCartState } from './cart.state';

export interface IAppState {
  products: IProductState;
  login: ILoginState;
  cart: ICartState;
}

export const initialAppState: IAppState = {
  products: initialProductState,
  login: initialLoginState,
  cart: initialCartState,
};

export const getInitialAppState = (): IAppState => initialAppState;
