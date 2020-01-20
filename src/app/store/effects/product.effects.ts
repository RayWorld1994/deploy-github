import { SnackBarService } from './../../modules/core/services/snack-bar.service';
import {
  GetProductsCategoryAction,
  GetProductsCategorySuccess,
  SearchProductsAction,
  SearchProductsSuccessAcction,
  SearchProductsFailureAction,
} from './../actions/product.actions';
import { Injectable } from '@angular/core';
import {
  EProductActions,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction,
  GetProductsCategoryFailure,
} from '../actions/product.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/modules/home/services/product.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { normalizrProducts } from '../normalizr/normalizr';

@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService,
    private store: Store<IAppState>,
    private snackBarService: SnackBarService
  ) {}

  @Effect()
  getProducts$ = this.actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => {
      return this.productService.getProducts();
    }),
    switchMap((products) => {
      return of(new GetProductsSuccessAction(products));
    }),
    catchError((error, caugth) => {
      this.store.dispatch(new GetProductsFailureAction(error));
      this.snackBarService.openSnackBar(error.statusText, 'close');
      return caugth;
    })
  );

  @Effect()
  getProductsCategory$ = this.actions.pipe(
    ofType<GetProductsCategoryAction>(EProductActions.GetProductsCategory),
    switchMap((action) =>
      this.productService.getProductsByCategory(action.payload.category)
    ),
    switchMap((products) => of(new GetProductsCategorySuccess(products))),
    catchError((error, caugth) => {
      this.store.dispatch(new GetProductsCategoryFailure(error));
      this.snackBarService.openSnackBar(error.statusText, 'close');
      return caugth;
    })
  );

  @Effect()
  searchProducts$ = this.actions.pipe(
    ofType<SearchProductsAction>(EProductActions.SearchProducts),
    switchMap((action) =>
      this.productService.searchProducts(action.payload.nameProduct)
    ),
    switchMap((products) => of(new SearchProductsSuccessAcction(products))),
    catchError((error, caugth) => {
      this.store.dispatch(new SearchProductsFailureAction(error));
      this.snackBarService.openSnackBar(error.statusText, 'close');
      return caugth;
    })
  );
}
