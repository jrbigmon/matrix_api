import {
  BeforeFind,
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
import { ulid } from 'ulid';
import { FindOptions } from 'sequelize';
import StorageBoxType from '../../storage-boxes-types/entities/storage-boxes-types.entity';
import SectionMapIndex from '../../section-map-indexes/entities/section-map-indexes.entity';

@Table({ tableName: 'storage_boxes', freezeTableName: true })
export default class StorageBox extends Model<StorageBox> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @Column({ type: DataType.STRING })
  number: string;

  @Column({ type: DataType.STRING })
  status: string;

  @ForeignKey(() => StorageBoxType)
  @Column({ field: 'type_id', type: DataType.STRING })
  typeId: string;

  @BelongsTo(() => StorageBoxType, 'typeId')
  type: StorageBoxType;

  @ForeignKey(() => SectionMapIndex)
  @Column({ field: 'section_map_index_id', type: DataType.STRING })
  sectionMapIndexId: string;

  @BelongsTo(() => SectionMapIndex, 'sectionMapIndexId')
  sectionMapIndex: SectionMapIndex;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at', type: DataType.DATE })
  deletedAt: Date;

  @BeforeFind
  static includes(options: FindOptions<StorageBox>) {
    options.include = [
      { association: 'type' },
      { association: 'sectionMapIndex' },
    ];
  }
}
