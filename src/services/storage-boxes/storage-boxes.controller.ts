import StorageBoxService from './storage-boxes.service';
import { AbstractController } from '../abstract.controller';
import StorageBox from './entities/storage-boxes.entity';

const StorageBoxController = () => {
  const methods = AbstractController<StorageBox>(StorageBoxService);

  return {
    ...methods,
  };
};

export default StorageBoxController();
