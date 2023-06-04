import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import StorageBox from '../services/storage-boxes/entities/storage-boxes.entity';
import StorageBoxType from '../services/storage-boxes-types/entities/storage-boxes-types.entity';
import SectionMapIndex from '../services/section-map-indexes/entities/section-map-indexes.entity';
import SectionMap from '../services/section-maps/entities/section-maps.entity';
import Section from '../services/sections/entities/section.entity';
import Warehouse from '../services/warehouses/entities/warehouses.entity';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
});

const models = [
  StorageBox,
  StorageBoxType,
  SectionMapIndex,
  SectionMap,
  Section,
  Warehouse,
];

export const addModels = () => {
  sequelize.addModels(models);
};

export default sequelize;
