import { Attributes, CreationAttributes, WhereOptions } from 'sequelize';
import { Model, Repository } from 'sequelize-typescript';
import { getQuery } from '../utils/get-query';
import { CustomRequestQuery } from '../utils/types/custom-request-query';

export interface Service<T extends Model<T>, QueryString> {
  create: (record: CreationAttributes<T>) => Promise<T>;
  update: (id: number, record: CreationAttributes<T>) => Promise<T>;
  destroy: (id: number) => Promise<void>;
  getOne: (id: number, options?: QueryString) => Promise<T>;
  getList: (
    options?: CustomRequestQuery<QueryString>,
    objectReference?: QueryString,
  ) => Promise<T[]>;
}

export const AbstractService = <T extends Model<T>, QueryString>(
  model: Repository<T>,
): Service<T, QueryString> => {
  const create = async (record: CreationAttributes<T>) => {
    if (!record) {
      throw new Error(`${model.name} cannot be create!`);
    }

    let properties: any;

    for (const key in record) {
      if (record[key] !== null) {
        properties[key] = record[key];
      }
    }

    const alreadyExists = await model.findOne({ where: { ...properties } });

    if (alreadyExists) {
      throw new Error(`Already existing!`);
    }

    const result = await model.create(record);

    return result.toJSON();
  };

  const update = async (id: number, record: CreationAttributes<T>) => {
    if (!id) {
      throw new Error(`Params must be provided to update ${model.name}`);
    }

    if (!record) {
      throw new Error(`${model.name} cannot be update!`);
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      throw new Error(`${model.name} with id: ${id} not found!`);
    }

    return objectInDatabase.update(record);
  };

  const destroy = async (id: number) => {
    if (!id) {
      throw new Error(`Params must be provided to destroy ${model.name}`);
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      throw new Error(`${model.name} with id: ${id} not found!`);
    }

    return await objectInDatabase.destroy();
  };

  const getOne = async (id: number) => {
    if (!id) {
      throw new Error(`Params must be provided to getOne ${model.name}`);
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      throw new Error(`${model.name} with id: ${id} not found!`);
    }

    return objectInDatabase.toJSON();
  };

  const getList = async (
    queries?: CustomRequestQuery<QueryString>,
    objectReference?: QueryString,
  ) => {
    let queriesFormatted = {};

    if (queries && objectReference) {
      queriesFormatted = getQuery<QueryString>(
        queries,
        objectReference,
      ) as WhereOptions<Attributes<T>>;
    }

    return await model.findAll({
      where: queriesFormatted,
    });
  };

  return {
    create,
    update,
    destroy,
    getOne,
    getList,
  };
};
