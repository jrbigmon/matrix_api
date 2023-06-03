import StorageBox from './entities/storage-boxes.entity';
import { AbstractService } from '../abstract.service';
import { QueryString } from './types';

export const StorageBoxService = () => {
  const methods = AbstractService<StorageBox, QueryString>(StorageBox);

  return {
    ...methods,
  };
};
