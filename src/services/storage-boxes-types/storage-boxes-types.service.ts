import sequelize from '../../database';
import { StorageBoxTypeDTO } from './entities/storage-boxes-types.dto';
import StorageBoxType from './entities/storage-boxes-types.entity';

sequelize.addModels([StorageBoxType]);

const StorageBoxTypeService = () => {
  const create = async (
    record: Partial<StorageBoxTypeDTO>,
  ): Promise<StorageBoxType> => {
    if (!record) {
      throw new Error('Storage box type cannot be created');
    }
    console.log(record);
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
      const height = record.height && record.height > 0 ? record.height : 1;
      const depth = record.depth && record.depth > 0 ? record.depth : 1;
      const width = record.width && record.width > 0 ? record.width : 1;

      record.capacity = height * depth * width;
    }

    return await StorageBoxType.create(record);
  };

  const getAll = async (): Promise<StorageBoxType[]> => {
    return await StorageBoxType.findAll();
  };

  return {
    create,
    getAll,
  };
};

export default StorageBoxTypeService();
