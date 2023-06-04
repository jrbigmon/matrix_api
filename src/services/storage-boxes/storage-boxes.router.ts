import { Router } from 'express';
import StorageBoxController from './storage-boxes.controller';

const router = Router();

router.post('/storage-box', StorageBoxController.create);

export default router;
