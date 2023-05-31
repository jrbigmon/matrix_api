import sequelize from '../../database';
import { getCapacity } from '../../utils/get-capacity';
import { getQuery } from '../../utils/get-query';
import { StorageBoxTypeDTO } from './entities/storage-boxes-types.dto';
import StorageBoxType from './entities/storage-boxes-types.entity';
import { QueryString, objectReference } from './types';

sequelize.addModels([StorageBoxType]);

const StorageBoxTypeService = () => {
  const getAll = async (queries?: any): Promise<StorageBoxType[]> => {
    const queriesFormatted = getQuery<QueryString>(queries, objectReference);
    return await StorageBoxType.findAll({
      where: queriesFormatted,
    });
  };

  const getOne = async (id: string): Promise<StorageBoxType> => {
    if (!id) {
      throw new Error('Params must be provided to get storage box type!');
    }

    return await StorageBoxType.findByPk(id);
  };

  const create = async (
    record: Partial<StorageBoxTypeDTO>,
  ): Promise<StorageBoxType> => {
    if (!record) {
      throw new Error('Storage box type cannot be created');
    }

    const alreadyExist = await StorageBoxType.findOne({
      where: {
        name: record.name,
        height: record.height,
        width: record.width,
        depth: record.depth,
      },
    });

    if (alreadyExist) {
      throw new Error('Storage box type already exist');
    }

    if (!record.capacity) {
      record.capacity = getCapacity(record.height, record.depth, record.width);
    }

    return await StorageBoxType.create(record);
  };

  const update = async (
    id: string,
    record: StorageBoxTypeDTO,
  ): Promise<StorageBoxType> => {
    if (!record) {
      throw new Error('Storage box type cannot be updated');
    }

    const newStorageBoxType = {
      name: record.name,
      height: record.height,
      width: record.width,
      depth: record.depth,
      capacity: record.capacity,
      status: record.status,
    };

    if (!newStorageBoxType?.capacity) {
      newStorageBoxType.capacity = getCapacity(
        record.height,
        record.depth,
        record.width,
      );
    }

    const storageBoxTypeToUpdate = await StorageBoxType.findByPk(id);

    if (!storageBoxTypeToUpdate) {
      throw new Error('Storage box type not found');
    }

    const result = await storageBoxTypeToUpdate.update(newStorageBoxType);

    return result;
  };

  const destroy = async (id: string): Promise<void> => {
    if (!id) {
      throw new Error('Params must be provided to delete storage box type!');
    }

    const storageBoxTypeToDelete = await StorageBoxType.findByPk(id);

    if (!storageBoxTypeToDelete) {
      throw new Error('Storage box type not found');
    }

    return await storageBoxTypeToDelete.destroy();
  };

  return {
    create,
    update,
    getAll,
    getOne,
    destroy,
  };
};

export default StorageBoxTypeService();
