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

export type ZodTypeError = {
  issues: [{ message: string; path: string[] }];
};

export const responseError = (
  res: Response,
  error: ErrorResponse | ZodTypeError,
) => {
  let message: string,
    typeError: TypeError,
    statusCode: StatusCode,
    field: string;

  if (Object.getOwnPropertyNames(error)?.includes('issues')) {
    const zodError = error as ZodTypeError;
    field = zodError.issues?.[0]?.path?.[0];
    message = zodError.issues[0]?.message;
    statusCode = StatusCode.ClientErrorBadRequest;
    typeError = TypeError.WARN;
  } else {
    const errorResponse = error as ErrorResponse;
    message = errorResponse.message;
    statusCode = errorResponse?.statusCode || StatusCode.ServerErrorInternal;
    typeError = errorResponse?.typeError || TypeError.ERROR;
  }

  const response = {
    field,
    message: message,
    statusCode: statusCode,
    status: typeError,
  };

  if (!response.field) delete response.field;

  return res.status(statusCode).json(response);
};
