import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import StorageBoxType from '../../storage-boxes-types/entities/storage-boxes-types.entity';
import SectionMap from '../../section-maps/entities/section-maps.entity';
import Warehouse from '../../warehouses/entities/warehouses.entity';
import { ulid } from 'ulid';

@Table({ tableName: 'sections', freezeTableName: true })
export default class Section extends Model<Section> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => Warehouse)
  @Column({ field: 'warehouse_id', type: DataType.STRING })
  warehouseId: string;

  @BelongsTo(() => Warehouse, 'warehouseId')
  warehouse: Warehouse;

  @ForeignKey(() => StorageBoxType)
  @Column({ field: 'storage_box_type_id', type: DataType.STRING })
  storageBoxTypeId: string;

  @BelongsTo(() => StorageBoxType, 'storageBoxTypeId')
  storageBoxType: StorageBoxType;

  @ForeignKey(() => SectionMap)
  @Column({ field: 'section_map_id', type: DataType.STRING })
  sectionMapId?: string;

  @BelongsTo(() => SectionMap, 'sectionMapId')
  sectionMap?: SectionMap;

  @Column({ type: DataType.STRING })
  status: string;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at', type: DataType.DATE })
  deletedAt: Date;
}
