import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { ulid } from 'ulid';

@Table({ tableName: 'storage_box_types' })
export default class StorageBoxType extends Model<StorageBoxType> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.DECIMAL })
  height: number;

  @Column({ type: DataType.DECIMAL })
  width: number;

  @Column({ type: DataType.DECIMAL })
  depth: number;

  @Column({ type: DataType.DECIMAL })
  capacity: number;

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
