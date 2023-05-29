import { Request, Response } from 'express';
import StorageBoxType from './entities/storage-boxes-types.entity';
import { StorageBoxTypeDTO } from './entities/storage-boxes-types.dto';
import StorageBoxTypeService from './storage-boxes-types.service';

const StorageBoxController = () => {
  const create = async (
    req: Request,
    res: Response,
  ): Promise<Response<StorageBoxType>> => {
    try {
      const record = await StorageBoxTypeService.create(req.body);

      return res.json(record);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        status: 'ERROR',
      });
    }
  };

  const destroy = (req: Request, res: Response): Promise<Response<void>> => {
    try {
      const { id } = req.params;
      const record = await StorageBoxTypeService.destroy(id);
    } catch (error) {
      
    }
  }

  return {
    create,
    delete,
  };
};

export default StorageBoxController();
