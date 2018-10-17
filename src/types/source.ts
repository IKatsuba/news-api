import { Categories, Countries, Languages } from '../enums';

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Categories;
  language: Languages;
  country: Countries;
}
