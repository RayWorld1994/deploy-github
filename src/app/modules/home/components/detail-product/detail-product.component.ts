import { IProduct } from './../../models/product.model';
import { GetProductSelectedAction } from './../../../../store/actions/product.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/store/state/app.state';
import { getSelectedProduct } from 'src/app/store/selectors/products.selectors';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  quantity = 1;
  product: Observable<IProduct> = this.store.pipe(select(getSelectedProduct));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  increase() {
    return this.quantity++;
  }

  decrease() {
    return this.quantity > 1 ? this.quantity-- : this.quantity;
  }
}
