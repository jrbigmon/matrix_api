import { Response } from 'express';
import matrixService from './matrix.service';

const matrixController = () => {
  const showMatrix = (_: any, res: Response) => {
    return res.json(matrixService.showMatrix());
  };

  return {
    showMatrix,
  };
};

export default matrixController();
