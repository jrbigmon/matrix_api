import StorageBoxTypeService from './storage-boxes-types.service';
import { AbstractController } from '../abstract.controller';
import StorageBoxType from './entities/storage-boxes-types.entity';

const StorageBoxController = () => {
  const methods = AbstractController<StorageBoxType>(StorageBoxTypeService);

  return {
    ...methods,
  };
};

export default StorageBoxController();
