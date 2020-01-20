import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IProductState } from '../state/products.state';

export const getProductState = (state: IAppState) => state.products;

export const getProducts = createSelector(
  getProductState,
  (state: IProductState) => state.products
);

export const getSelectedProduct = createSelector(
  getProductState,
  (state: IProductState) => state.selectedProduct
);

export const getProductsCategory = createSelector(
  getProductState,
  (state: IProductState) => state.products
);
