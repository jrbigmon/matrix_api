import { AbstractController } from '../abstract.controller';
import Warehouse from './entities/warehouses.entity';
import { getValidators } from './validators';
import WarehouseService from './warehouse.service';

const WarehouseController = () => {
  const methods = AbstractController<Warehouse>(
    WarehouseService,
    getValidators(),
  );

  return {
    ...methods,
  };
};

export default WarehouseController();
