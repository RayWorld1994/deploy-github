import { Master } from './master.model';
import { Category } from './category.model';
import { Image } from './image.model';

export class Product implements IProduct {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  // tslint:disable-next-line:variable-name
  likes_count: number;
  // tslint:disable-next-line:variable-name
  likes_up_count: number;
  // tslint:disable-next-line:variable-name
  likes_down_count: number;
  // tslint:disable-next-line:variable-name
  published_at: Date;
  master: Master;
  category: Category;
  image: Image;
}

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  likes_count: number;
  likes_up_count: number;
  likes_down_count: number;
  published_at: Date;
  master: Master;
  category: Category;
  image: Image;
}

export interface IProductDto {
  _id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  likes_count: number;
  likes_up_count: number;
  likes_down_count: number;
  published_at: Date;
  master: Master;
  category: Category;
  image: Image;
}
