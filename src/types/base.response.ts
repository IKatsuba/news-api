import { ResponseStatuses } from '../enums';

export interface BaseResponse {
  status: ResponseStatuses;
  code?: string;
  message?: string;
}
