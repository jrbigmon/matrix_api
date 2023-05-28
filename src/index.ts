import express from 'express';

import homeRoutes from "./services/home/home.router";
import matrixRouter from "./services/matrix/matrix.router";

const app = express();
const port = 3000;

const routes = [
  homeRoutes,
  matrixRouter,
];

app.use(routes);

app.listen(port, () => {
  console.log('Server is running in port: ' + port);
})