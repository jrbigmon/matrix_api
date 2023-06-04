import { Router } from 'express';
import StorageBoxController from './storage-boxes.controller';

const router = Router();

router.post('/storage-boxes', StorageBoxController.create);
router.get('/storage-boxes', StorageBoxController.getList);
export default router;
