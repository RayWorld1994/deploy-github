import { ReactionTo } from './../models/reactionTo.model';
import { Category } from './../models/category.model';
import { IProduct } from './../models/product.model';
import { ResponseApi } from './../models/response-api.model';
import { EndpointsService } from './../../core/services/endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ReactionFrom } from '../models/reactionFrom.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private endpoints: EndpointsService) {}

  handleError<T>(error) {
    console.error(error);
    return of(null);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<ResponseApi<IProduct[]>>(this.endpoints.store.products())
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getProductsByCategory(idCategory: number): Observable<IProduct[]> {
    return this.http
      .get<ResponseApi<IProduct[]>>(
        this.endpoints.store.productsCategry(idCategory)
      )
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getCategories(): Observable<ResponseApi<Category>> {
    return this.http.get<ResponseApi<Category>>(
      this.endpoints.store.categories()
    );
  }

  searchProducts(nameProduct: string): Observable<IProduct[]> {
    return this.http
      .get<ResponseApi<IProduct[]>>(
        this.endpoints.store.SearchProducts(nameProduct)
      )
      .pipe(map((response) => response.data));
  }

  reactionProduct(reaction: ReactionTo): Observable<ReactionFrom> {
    return this.http
      .post<ResponseApi<ReactionFrom>>(this.endpoints.store.likes(), {
        data: reaction,
      })
      .pipe(map((response) => response.data));
  }
}
