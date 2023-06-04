import StorageBoxService from './storage-boxes.service';
import { AbstractController } from '../abstract.controller';
import StorageBox from './entities/storage-boxes.entity';
import { getValidators } from './validators';

const StorageBoxController = () => {
  const methods = AbstractController<StorageBox>(
    StorageBoxService,
    getValidators(),
  );

  return {
    ...methods,
  };
};

export default StorageBoxController();
