import { Error } from './../models/error.model';
import { Filter } from './../models/filter.model';
import { Page } from './../models/page.model';
import { Meta } from './../models/meta.model';

export interface ResponseApi<Data> {
  filter?: Filter;
  page?: Page;
  data: Data;
  errors?: Error[];
  meta?: Meta;
}
