import { Article } from './article';
import { BaseResponse } from './base.response';

export interface ArticleResponse extends BaseResponse {
  totalResults: number;
  articles: Article[];
}
