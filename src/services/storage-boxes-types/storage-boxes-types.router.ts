import { Router } from 'express';
import StorageBoxTypeController from './storage-boxes-types.controller';
const router = Router();

router.post('/storage-box-types', StorageBoxTypeController.create);
router.put('/storage-box-types/:id', StorageBoxTypeController.update);
router.get('/storage-box-types', StorageBoxTypeController.getAll);
router.get('/storage-box-types/:id', StorageBoxTypeController.getOne);
router.delete('/storage-box-types/:id', StorageBoxTypeController.destroy);

export default router;
