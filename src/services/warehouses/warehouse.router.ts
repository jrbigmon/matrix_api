import { Router } from 'express';
import WarehouseController from './warehouse.controller';

const router = Router();

router.get('/warehouse', WarehouseController.getList);
router.post('/warehouse', WarehouseController.create);
router.delete('/warehouse', WarehouseController.destroy);
router.put('/warehouse/:id', WarehouseController.update);
router.get('/warehouse/:id', WarehouseController.getOne);

export default router;
