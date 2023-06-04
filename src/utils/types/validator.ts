import { z } from 'zod';

export type Validator = {
  create: z.ZodObject<{}>;
  update: z.ZodObject<{}>;
};
