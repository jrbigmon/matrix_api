import { Request, Response } from 'express';
import StorageBoxType from './entities/storage-boxes-types.entity';
import StorageBoxTypeService from './storage-boxes-types.service';
import storageBoxesTypesService from './storage-boxes-types.service';
import { responseError } from '../../utils/response-error';

const StorageBoxController = () => {
  const getAll = async (
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> => {
    try {
      const records = await StorageBoxTypeService.getAll(req?.query);

      return res.json(records);
    } catch (error) {
      responseError(res, error);
    }
  };

  const getOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await StorageBoxTypeService.getOne(id);

      return res.status(200).json(result);
    } catch (error) {
      responseError(res, error);
    }
  };

  const create = async (
    req: Request,
    res: Response,
  ): Promise<Response<StorageBoxType>> => {
    try {
      const record = await StorageBoxTypeService.create(req?.body);

      return res.json(record);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const { id } = req?.params;

      const result = await storageBoxesTypesService.update(id, req?.body);

      return res.json(result);
    } catch (error) {
      responseError(res, error);
    }
  };

  const destroy = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await storageBoxesTypesService.destroy(id);

      return res.json(result);
    } catch (error) {
      responseError(res, error);
    }
  };

  return {
    create,
    update,
    getAll,
    getOne,
    destroy,
  };
};

export default StorageBoxController();
