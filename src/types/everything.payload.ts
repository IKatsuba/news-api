import { Languages, SortBy } from '../enums';

export interface EverythingPayload {
  q?: string;
  sources?: string[];
  domains?: string[];
  excludeDomains?: string[];
  from?: string;
  to?: string;
  language?: Languages;
  sortBy?: SortBy;
  pageSize?: number;
  page?: number;
  apiKey?: number;
}
