import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { StorageBoxType } from '../../storage-boxes-types/entities/storage-boxes-types.entity';
import { SectionMapIndex } from '../../section-map-indexes/entities/section-map-indexes.entity';

@Table({ tableName: 'storage_boxes', freezeTableName: true })
export class StorageBox extends Model<StorageBox> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  number: string;

  @Column
  status: string;

  @ForeignKey(() => StorageBoxType)
  @Column
  typeId: string;

  @BelongsTo(() => StorageBoxType)
  type: StorageBoxType;

  @ForeignKey(() => SectionMapIndex)
  @Column({ field: 'section_map_index_id' })
  sectionMapIndexId: string;

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
