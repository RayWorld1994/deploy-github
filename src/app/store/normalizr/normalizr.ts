import { IProduct } from 'src/app/modules/home/models/product.model';
import { normalize, schema } from 'normalizr';

export function normalizrProducts(dataProducts: IProduct[]) {
  const OriginalData = { products: dataProducts };
  const product = new schema.Entity('products');
  const productsSchema = { products: [product] };
  return normalize(OriginalData, productsSchema);
}
