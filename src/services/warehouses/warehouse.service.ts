import { AbstractService } from '../abstract.service';
import Warehouse from './entities/warehouses.entity';
import { QueryString, objectReference } from './types';

const WarehouseService = () => {
  const methods = AbstractService<Warehouse, QueryString>(
    Warehouse,
    objectReference,
  );

  return {
    ...methods,
  };
};

export default WarehouseService();
