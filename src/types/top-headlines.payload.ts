import { Categories, Countries } from '../enums';

export interface TopHeadlinesPayload {
  country?: Countries;
  category?: Categories;
  sources?: string[];
  q?: string;
  pageSize?: number;
  page?: number;
  apiKey?: string;
}
