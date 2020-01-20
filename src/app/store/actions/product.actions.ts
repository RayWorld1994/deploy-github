import { IProduct } from './../../modules/home/models/product.model';
import { Action } from '@ngrx/store';
import { ActionFailurePayload } from 'src/app/modules/home/models/errors.model';
import { normalizrProducts } from '../normalizr/normalizr';

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get ProductsFailure',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProductsCategory = '[Product] Get Product by Category',
  GetProductsCategorySucces = '[Product] Get Product by Category Success',
  GetProductsCategoryFailure = '[Product] Get Product by Category Failure',
  SearchProducts = '[Product] Search Products',
  SearchProductsFailure = '[Product] Search ProductsFailure',
  SearchProductsSuccess = '[Product] Search Products Success',
  GetProductSelected = '[Product] Get Product Selected',
}

export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccessAction implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  public payload;
  constructor(products: IProduct[]) {
    this.payload = normalizrProducts(products);
  }
}

export class GetProductsFailureAction implements Action {
  public readonly type = EProductActions.GetProductsFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

interface ICategoryProductPayload {
  category: number;
}

export class GetProductsCategoryAction implements Action {
  public readonly type = EProductActions.GetProductsCategory;
  public payload: ICategoryProductPayload;
  constructor(category: number) {
    this.payload = { category };
  }
}

export class GetProductsCategorySuccess implements Action {
  public readonly type = EProductActions.GetProductsCategorySucces;
  public payload;
  constructor(products: IProduct[]) {
    this.payload = normalizrProducts(products);
  }
}

export class GetProductsCategoryFailure implements Action {
  public readonly type = EProductActions.GetProductsCategoryFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

interface IsearchProductsPayload {
  nameProduct: string;
}

export class SearchProductsAction implements Action {
  public readonly type = EProductActions.SearchProducts;
  public payload: IsearchProductsPayload;
  constructor(nameProduct: string) {
    this.payload = {
      nameProduct,
    };
  }
}

interface ISearchProductsSuccessPayload {
  products: IProduct[];
}

export class SearchProductsSuccessAcction implements Action {
  public readonly type = EProductActions.SearchProductsSuccess;
  public payload: ISearchProductsSuccessPayload;
  constructor(products: IProduct[]) {
    this.payload = { products };
  }
}

export class SearchProductsFailureAction implements Action {
  public readonly type = EProductActions.SearchProductsFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

export class GetProductSelectedAction implements Action {
  public readonly type = EProductActions.GetProductSelected;
  public payload;
  constructor(id: number) {
    this.payload = { id };
  }
}

export type ProductActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | GetProductsCategoryAction
  | GetProductsCategorySuccess
  | GetProductsCategoryFailure
  | SearchProductsAction
  | SearchProductsSuccessAcction
  | SearchProductsFailureAction
  | GetProductSelectedAction;
