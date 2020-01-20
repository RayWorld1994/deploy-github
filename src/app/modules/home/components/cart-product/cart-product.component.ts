import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { RemoveProductCartAction } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() item: Product;
  quantity: number;
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.quantity = 1;
  }

  increase() {
    return this.quantity++;
  }

  decrease() {
    return this.quantity > 1 ? this.quantity-- : this.quantity;
  }

  removeProduct() {
    this.store.dispatch(new RemoveProductCartAction(this.item));
  }
}
