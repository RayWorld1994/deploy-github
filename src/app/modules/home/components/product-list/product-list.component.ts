import {
  GetProductsCategoryAction,
  GetProductsAction,
  SearchProductsAction,
} from './../../../../store/actions/product.actions';
import { of as observableOf, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import {
  getProducts,
  getProductState,
} from 'src/app/store/selectors/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = this.store.pipe(
    select(getProducts),
    map((response) => {
      return Object.values(response);
    })
  );

  error = this.store.pipe(
    select(getProductState),
    map((state) => state.error)
  );

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.getProductsByCategory(Number(params.get('id')));
      } else if (params.has('name')) {
        this.serchProduct(params.get('name'));
      } else {
        this.store.dispatch(new GetProductsAction());
      }
    });
  }

  getProductsByCategory(id: number) {
    this.store.dispatch(new GetProductsCategoryAction(Number(id)));
  }

  serchProduct(nameProduct: string) {
    this.store.dispatch(new SearchProductsAction(nameProduct));
  }
}
