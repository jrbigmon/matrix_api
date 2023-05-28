import { Response } from 'express';
import homeService from './home.service';

const homeController = () => {
  const helloWold = async (_: any, res: Response) => {
    return res.json(homeService.helloWorld());
  };

  return {
    helloWold,
  };
};

export default homeController();
