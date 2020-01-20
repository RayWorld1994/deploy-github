import { ReactionTo } from './../../models/reactionTo.model';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { GetProductSelectedAction } from './../../../../store/actions/product.actions';
import { AddProductCartAction } from './../../../../store/actions/cart.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { tap } from 'rxjs/operators';
import { SnackBarService } from 'src/app/modules/core/services/snack-bar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() item: Product;
  isLike: number;
  colorLike = '';
  colorDislike = '';
  reaction: ReactionTo;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private productService: ProductService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.reaction = {
      product_id: this.item.id,
      kind: this.isLike,
    };
  }

  addToCart() {
    this.store.dispatch(new AddProductCartAction(this.item));
  }

  like() {
    this.colorLike = 'accent';
    this.colorDislike = '';
    this.isLike = 1;
    this.productService
      .reactionProduct(this.reaction)
      .pipe(tap(() => {}))
      .subscribe(
        () => {},
        (error) => {
          this.colorLike = '';
          this.snackBarService.openSnackBar(error.statusText, 'close');
        }
      );
  }

  disLike() {
    this.colorDislike = 'accent';
    this.colorLike = '';
    this.isLike = 0;
    this.productService.reactionProduct(this.reaction).subscribe(
      () => {},
      (error) => {
        this.colorDislike = '';
        this.snackBarService.openSnackBar(error.statusText, 'close');
      }
    );
  }

  viewProduct() {
    this.store.dispatch(new GetProductSelectedAction(this.item.id));
    this.router.navigate(['product', this.item.name]);
  }
}
