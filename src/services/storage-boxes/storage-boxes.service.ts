import { Request } from 'express';
import { StorageBoxDTO } from './entities/storage-boxes.dto';
import { StorageBox } from './entities/storage-boxes.entity';

export const StorageBoxService = () => {
  const create = (record: StorageBoxDTO): Promise<StorageBox> => {
    return null;
  };
};
