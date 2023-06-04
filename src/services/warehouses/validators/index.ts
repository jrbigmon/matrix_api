import { Validator } from '../../../utils/types/validator';
import { z } from 'zod';

export const getValidators = (): Validator => {
  const createValidator = () => {
    return z.object({
      name: z.string(),
      description: z.string().optional(),
      code: z.string(),
      status: z.string().optional(),
    });
  };

  const updateValidator = () => {
    return z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      code: z.string().optional(),
      status: z.string().optional(),
    });
  };

  return {
    create: createValidator(),
    update: updateValidator(),
  };
};
