import { Injectable } from '@angular/core';
import { StoreApiEndpoints } from '../classes/store-api.endpoints';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  store = new StoreApiEndpoints();

  constructor() {}
}
