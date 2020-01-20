import { GetProductsCategoryAction } from './../../../../store/actions/product.actions';
import { Store } from '@ngrx/store';
import { Category } from './../../models/category.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProductService } from '../../services/product.service';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  categories: Category;
  isActive = 'true';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getCategories();
  }

  close() {
    this.sidenav.close();
  }

  getCategories() {
    return this.productService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
}
