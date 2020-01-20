import { IProduct } from 'src/app/modules/home/models/product.model';

export interface ICartState {
  products: IProduct[];
  error: any;
}

export const initialCartState: ICartState = {
  products: [],
  error: null,
};
