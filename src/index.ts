import express from 'express';

import storageBoxTypeRouter from './services/storage-boxes-types/storage-boxes-types.router';

const app = express();
const port = 3000;

const routes = [storageBoxTypeRouter];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, () => {
  console.log('Server is running in port: ' + port);
});
