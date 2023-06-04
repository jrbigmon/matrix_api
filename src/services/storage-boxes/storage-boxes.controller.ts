import { Request, Response } from 'express';
import StorageBoxService from './storage-boxes.service';
import { responseError } from '../../utils/response-error';
import StatusCode from 'status-code-enum';

const StorageBoxController = () => {
  const getOne = async (req: Request, res: Response) => {
    try {
      const result = await StorageBoxService.getOne(Number(req?.params));
      return res.status(200).json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const getList = async (req: Request, res: Response) => {
    try {
      const result = await StorageBoxService.getList(req?.query);
      return res.json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const create = async (req: Request, res: Response) => {
    try {
      const result = await StorageBoxService.create(req?.body);
      return res.status(201).json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const result = await StorageBoxService.update(
        Number(req?.params),
        req?.body,
      );
      return res.status(200).json(result);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const destroy = async (req: Request, res: Response) => {
    try {
      await StorageBoxService.destroy(Number(req?.params));
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

export default StorageBoxController();
