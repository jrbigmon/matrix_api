import { Request, Response } from 'express';
import StatusCode from 'status-code-enum';
import { Service } from './abstract.service';
import { Model } from 'sequelize-typescript';
import { responseError } from '../utils/response-error';

export interface Controller<T extends Model<T>> {
  create: (
    req: Request,
    res: Response,
  ) => Promise<Response<T, Record<string, T>>>;
  update: (
    req: Request,
    res: Response,
  ) => Promise<Response<void, Record<string, void>>>;
  destroy: (
    req: Request,
    res: Response,
  ) => Promise<Response<void, Record<string, void>>>;
  getList: (
    req: Request,
    res: Response,
  ) => Promise<Response<T[], Record<string, T[]>>>;
  getOne: (
    req: Request,
    res: Response,
  ) => Promise<Response<T, Record<string, T>>>;
}

export const AbstractController = <T extends Model<T>>(
  service: Service<T, unknown>,
): Controller<T> => {
  const getOne = async (req: Request, res: Response) => {
    try {
      const result = await service.getOne(Number(req?.params));
      return res.json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const getList = async (req: Request, res: Response) => {
    try {
      const result = await service.getList(req?.query);
      return res.json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const create = async (req: Request, res: Response) => {
    try {
      const result = await service.create(req?.body);
      return res.status(StatusCode.SuccessCreated).json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const result = await service.update(Number(req?.params), req?.body);
      return res.json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const destroy = async (req: Request, res: Response) => {
    try {
      await service.destroy(Number(req?.params));
      return res.status(StatusCode.SuccessNoContent).json();
    } catch (error) {
      return responseError(res, error);
    }
  };

  return {
    getOne,
    getList,
    create,
    update,
    destroy,
  };
};
