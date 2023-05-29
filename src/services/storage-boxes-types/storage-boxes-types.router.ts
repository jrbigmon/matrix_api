import { Router } from 'express';
import StorageBoxTypeController from './storage-boxes-types.controller';
const router = Router();

router.post('/storage-box-types', StorageBoxTypeController.create);

export default router;
