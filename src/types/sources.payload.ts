import { Categories, Countries, Languages } from '../enums';

export interface SourcesPayload {
  category: Categories;
  language: Languages;
  country: Countries;
  apiKey: string;
}
