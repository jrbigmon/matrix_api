import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'warehouses', freezeTableName: true })
export default class Warehouse extends Model<Warehouse> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  code: string;

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
