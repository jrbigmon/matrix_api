import { Router } from 'express';
import StorageBoxTypeController from './storage-boxes-types.controller';
const router = Router();

router.get('/storage-box-types', StorageBoxTypeController.getAll);
router.post('/storage-box-types', StorageBoxTypeController.create);

export default router;
