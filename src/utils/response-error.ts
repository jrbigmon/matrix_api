import { Response } from 'express';

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
  return res.status(error?.statusCode).json({
    message: error?.message,
    statusCode: error?.statusCode,
    status: error?.typeError,
  });
};
