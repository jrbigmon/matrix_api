import {
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import StorageBoxType from '../../storage-boxes-types/entities/storage-boxes-types.entity';
import SectionMap from '../../section-maps/entities/section-maps.entity';
import Warehouse from '../../warehouses/entities/warehouses.entity';

@Table({ tableName: 'sections', freezeTableName: true })
export default class Section extends Model<Section> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  name: string;

  @ForeignKey(() => Warehouse)
  @Column({ field: 'warehouse_id' })
  warehouseId: number;

  @ForeignKey(() => StorageBoxType)
  @Column({ field: 'storage_box_type_id ' })
  storageBoxTypeId: number;

  @ForeignKey(() => SectionMap)
  @Column({ field: 'section_map_id ' })
  sectionMapId: number;

  @Column
  status: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;
}
