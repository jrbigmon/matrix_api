import StorageBoxTypeService from './storage-boxes-types.service';
import { AbstractController } from '../abstract.controller';
import StorageBoxType from './entities/storage-boxes-types.entity';
import { getValidators } from './validators';

const StorageBoxController = () => {
  const methods = AbstractController<StorageBoxType>(
    StorageBoxTypeService,
    getValidators(),
  );

  return {
    ...methods,
  };
};

export default StorageBoxController();
