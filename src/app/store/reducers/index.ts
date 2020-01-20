import { environment } from './../../../environments/environment.prod';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { productReducer } from './product.reducer';
import { LoginReducer } from './login.reducers';
import { CartReducer } from './cart.reducers';

export const reducers: ActionReducerMap<IAppState, any> = {
  products: productReducer,
  login: LoginReducer,
  cart: CartReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
