import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { IAppState } from 'src/app/store/state/app.state';
import { getCart } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  products: Observable<Product[]> = this.store.pipe(select(getCart));
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}
}
