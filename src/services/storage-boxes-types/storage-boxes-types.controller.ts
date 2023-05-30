import { Request, Response } from 'express';
import StorageBoxType from './entities/storage-boxes-types.entity';
import StorageBoxTypeService from './storage-boxes-types.service';

const StorageBoxController = () => {
  const responseError = (res: Response, error: Error) => {
    return res.status(500).json({
      message: error.message,
      status: 'ERROR',
    });
  };

  const create = async (
    req: Request,
    res: Response,
  ): Promise<Response<StorageBoxType>> => {
    try {
      const record = await StorageBoxTypeService.create(req.body);

      return res.json(record);
    } catch (error) {
      return responseError(res, error);
    }
  };

  const getAll = async (
    req: Request,
    res: Response,
  ): Promise<Response<StorageBoxType[]>> => {
    try {
      const records = await StorageBoxTypeService.getAll(req?.query);

      return res.json(records);
    } catch (error) {
      responseError(res, error);
    }
  };

  return {
    create,
    getAll,
  };
};

export default StorageBoxController();
