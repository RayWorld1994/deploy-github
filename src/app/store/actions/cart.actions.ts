import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/modules/home/models/product.model';

export enum ECartActions {
  AddProductCart = '[Cart] Add product Cart',
  RemoveProductCart = '[Cart] Remove product Cart',
}

interface IAddProductCartPayload {
  product: IProduct;
}

export class AddProductCartAction implements Action {
  public readonly type = ECartActions.AddProductCart;
  public payload: IAddProductCartPayload;
  constructor(product: IProduct) {
    this.payload = { product };
  }
}

interface IRemoveProductCartPayload {
  product: IProduct;
}

export class RemoveProductCartAction implements Action {
  public readonly type = ECartActions.RemoveProductCart;
  public payload: IRemoveProductCartPayload;
  constructor(product: IProduct) {
    this.payload = { product };
  }
}

export type CartActions = AddProductCartAction | RemoveProductCartAction;
