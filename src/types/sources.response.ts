import { BaseResponse } from './base.response';
import { Source } from './source';

export interface SourcesResponse extends BaseResponse {
  sources: Source[];
}
