import StorageBox from './entities/storage-boxes.entity';
import { AbstractService } from '../abstract.service';
import { QueryString, objectReference } from './types';

const StorageBoxService = () => {
  const methods = AbstractService<StorageBox, QueryString>(
    StorageBox,
    objectReference,
  );

  return {
    ...methods,
  };
};

export default StorageBoxService();
