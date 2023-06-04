import StorageBoxTypeService from './storage-boxes-types.service';
import { AbstractController } from '../abstract.controller';
import StorageBoxType from './entities/storage-boxes-types.entity';
import { z } from 'zod';

const StorageBoxController = () => {
  const storageBoxValidator = z.object({
    name: z.string(),
    height: z.number().optional(),
    width: z.number().optional(),
    depth: z.number().optional(),
    capacity: z.number().optional(),
    status: z.string().optional(),
  });

  const methods = AbstractController<StorageBoxType>(
    StorageBoxTypeService,
    storageBoxValidator,
  );

  return {
    ...methods,
  };
};

export default StorageBoxController();
