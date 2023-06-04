import { Attributes, CreationAttributes, WhereOptions } from 'sequelize';
import { Model, Repository } from 'sequelize-typescript';
import { getQuery } from '../utils/get-query';
import { ParsedQs } from 'qs';
import sequelize from '../database';
import { ErrorFnc, TypeError } from '../utils/response-error';
import StatusCode from 'status-code-enum';

export interface Service<T extends Model<T>, QueryString> {
  create: (record: CreationAttributes<T>) => Promise<T>;
  update: (id: string, record: CreationAttributes<T>) => Promise<T>;
  destroy: (id: string) => Promise<void>;
  getOne: (id: string, options?: QueryString) => Promise<T>;
  getList: (options?: ParsedQs) => Promise<T[]>;
}

export const AbstractService = <T extends Model<T>, QueryString>(
  model: Repository<T>,
  objectReference?: QueryString,
): Service<T, QueryString> => {
  const create = async (record: CreationAttributes<T>) => {
    if (!record) {
      throw new Error(`${model.name} cannot be create!`);
    }

    let properties: any = {};

    for (const key in record) {
      if (record[key] !== null && properties[key]) {
        properties[key] = record[key];
      }
    }

    const alreadyExists = await model.findOne({ where: { ...properties } });

    if (alreadyExists) {
      ErrorFnc({
        message: `Already existing!`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    const result = await model.create(record);

    return result.toJSON();
  };

  const update = async (id: string, record: CreationAttributes<T>) => {
    if (!id) {
      ErrorFnc({
        message: `Params must be provided to update ${model.name}`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    if (!record) {
      ErrorFnc({
        message: `${model.name} cannot be update!`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      ErrorFnc({
        message: `${model.name} with id: ${id} not found!`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    return objectInDatabase.update(record);
  };

  const destroy = async (id: string) => {
    if (!id) {
      ErrorFnc({
        message: `Params must be provided to destroy ${model.name}`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      ErrorFnc({
        message: `${model.name} with id: ${id} not found!`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    return await objectInDatabase.destroy();
  };

  const getOne = async (id: string) => {
    if (!id) {
      ErrorFnc({
        message: `Params must be provided to getOne ${model.name}`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    const objectInDatabase = await model.findByPk(id);

    if (!objectInDatabase) {
      ErrorFnc({
        message: `${model.name} with id: ${id} not found!`,
        statusCode: StatusCode.ClientErrorBadRequest,
        typeError: TypeError.WARN,
      });
    }

    return objectInDatabase.toJSON();
  };

  const getList = async (queries?: ParsedQs) => {
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
