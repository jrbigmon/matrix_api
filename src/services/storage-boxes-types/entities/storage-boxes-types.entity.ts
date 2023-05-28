import {
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'storage_box_types', freezeTableName: true })
export class StorageBoxType extends Model<StorageBoxType> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  name: string;

  @Column
  height: number;

  @Column
  width: number;

  @Column
  depth: number;

  @Column
  capacity: number;

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
