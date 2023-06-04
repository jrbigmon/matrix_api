import { AbstractController } from '../abstract.controller';
import Warehouse from './entities/warehouses.entity';
import WarehouseService from './warehouse.service';

const WarehouseController = () => {
  const methods = AbstractController<Warehouse>(WarehouseService);

  return {
    ...methods,
  };
};

export default WarehouseController();
