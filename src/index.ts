import * as express from 'express';

import storageBoxTypeRouter from './services/storage-boxes-types/storage-boxes-types.router';
import storageBoxRouter from './services/storage-boxes/storage-boxes.router';
import warehouseRouter from './services/warehouses/warehouse.router';

import { addModels } from './database';

const app = express();
const port = 3000;

const routes = [storageBoxTypeRouter, storageBoxRouter, warehouseRouter];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, () => {
  addModels();
  console.log('Server is running in port: ' + port);
});
