import { IProduct } from './../../modules/home/models/product.model';

export interface IProductState {
  products: { [id: number]: IProduct };
  selectedProduct: IProduct;
  error: any;
}

export const initialProductState: IProductState = {
  products: {},
  selectedProduct: null,
  error: null,
};
