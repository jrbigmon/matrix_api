import { Response } from 'express';
import StatusCode from 'status-code-enum';

export enum TypeError {
  ERROR = 'ERROR',
  WARN = 'WARN',
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  typeError: TypeError;
}

export const ErrorFnc = ({
  message,
  statusCode,
  typeError,
}: ErrorResponse): ErrorResponse => {
  throw {
    message,
    statusCode,
    typeError,
  };
};

export const responseError = (res: Response, error: ErrorResponse) => {
  const statusCode = error?.statusCode || StatusCode.ServerErrorInternal;
  return res.status(statusCode).json({
    message: error?.message,
    statusCode: statusCode,
    status: error?.typeError || TypeError.ERROR,
  });
};
