import { Op, WhereOptions } from 'sequelize';
import { ParsedQs } from 'qs';

export const getQuery = <T>(
  queries: string | ParsedQs | string[] | ParsedQs[],
  objectProperties: unknown,
): WhereOptions<T> => {
  const queriesFormatted = {};

  for (const key in new Object(objectProperties)) {
    if (queries?.hasOwnProperty(key)) {
      if (Array.isArray(queries[key])) {
        const like = queries[key].map((query) => {
          return { [Op.like]: `%${query}%` };
        });
        queriesFormatted[key] = { [Op.or]: like };
      } else {
        queriesFormatted[key] = { [Op.like]: `%${queries[key]}%` };
      }
    }
  }

  return queriesFormatted as WhereOptions<T>;
};
