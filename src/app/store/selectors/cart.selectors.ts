import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ICartState } from '../state/cart.state';

export const getCartState = (state: IAppState) => state.cart;

export const getCart = createSelector(
  getCartState,
  (state: ICartState) => state.products
);
