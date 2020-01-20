import { environment } from '../../../../environments/environment.prod';

export class StoreApiEndpoints {
  baseUrl = `${environment.apiUrl}/api/v1`;

  products() {
    return `${this.baseUrl}/products?include=image_attachment.blob,category,master`;
  }

  SearchProducts(nameProduct: string) {
    return `${this.baseUrl}/products?include=image_attachment.blob,category,master&filter[name_cont]=${nameProduct}`;
  }

  productsCategry(id) {
    return `${this.baseUrl}/products?include=image_attachment.blob,category,master&filter[category_id_eq]=${id}`;
  }

  categories() {
    return `${this.baseUrl}/categories`;
  }

  login() {
    return `${this.baseUrl}/users/login`;
  }

  likes() {
    return `${this.baseUrl}/likes`;
  }
}
