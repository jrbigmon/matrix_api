import { Validator } from '../../../utils/types/validator';
import { z } from 'zod';

export const getValidators = (): Validator => {
  const createValidator = () => {
    return z.object({
      number: z.string(),
      status: z.string().optional(),
      typeId: z.string(),
    });
  };

  const updateValidator = () => {
    return z.object({
      number: z.string().optional(),
      status: z.string().optional(),
      typeId: z.string().optional(),
    });
  };

  return {
    create: createValidator(),
    update: updateValidator(),
  };
};
