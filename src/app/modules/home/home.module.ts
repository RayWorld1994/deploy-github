import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './components/product/product.component';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HeaderComponent,
    ProductComponent,
    ProfileComponent,
    ProductListComponent,
    CartListComponent,
    CartProductComponent,
    DetailProductComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HomeRoutingModule,
    MatMenuModule,
    MatTabsModule,
  ],
  exports: [HomeLayoutComponent, PageNotFoundComponent],
  providers: [ProductService],
})
export class HomeModule {}
