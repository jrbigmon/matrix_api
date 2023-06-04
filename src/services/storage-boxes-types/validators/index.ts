import { Validator } from '../../../utils/types/validator';
import { z } from 'zod';

export const getValidators = (): Validator => {
  const createValidator = () => {
    return z.object({
      name: z.string(),
      height: z.number().optional(),
      width: z.number().optional(),
      depth: z.number().optional(),
      capacity: z.number().optional(),
      status: z.string().optional(),
    });
  };

  const updateValidator = () => {
    return z.object({
      name: z.string().optional(),
      height: z.number().optional(),
      width: z.number().optional(),
      depth: z.number().optional(),
      capacity: z.number().optional(),
      status: z.string().optional(),
    });
  };

  return {
    create: createValidator(),
    update: updateValidator(),
  };
};
