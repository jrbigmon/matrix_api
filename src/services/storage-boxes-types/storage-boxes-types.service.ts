import { CreationAttributes } from 'sequelize';
import sequelize from '../../database';
import { getCapacity } from '../../utils/get-capacity';
import { getQuery } from '../../utils/get-query';
import { AbstractService } from '../abstract.service';
import StorageBoxType from './entities/storage-boxes-types.entity';
import { QueryString, objectReference } from './types';

const StorageBoxTypeService = () => {
  const methods = AbstractService<StorageBoxType, QueryString>(
    StorageBoxType,
    objectReference,
  );

  const create = async (record: StorageBoxType): Promise<StorageBoxType> => {
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
      record.capacity = getCapacity(
        record?.height || 0,
        record?.depth || 0,
        record?.width || 0,
      );
    }

    return await StorageBoxType.create(record);
  };

  const update = async (
    id: string,
    record: CreationAttributes<StorageBoxType>,
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

    return await storageBoxTypeToUpdate.update(newStorageBoxType);
  };

  methods.create = create;
  methods.update = update;

  return {
    ...methods,
  };
};

export default StorageBoxTypeService();
