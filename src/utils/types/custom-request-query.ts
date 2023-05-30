import { Request } from 'express';
import { ParsedQs } from 'qs';

export interface CustomRequestQuery<T>
  extends Request<T, any, any, ParsedQs, Record<string, any>> {
  query: ParsedQs;
}
