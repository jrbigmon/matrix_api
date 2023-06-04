import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ulid } from 'ulid';

@Table({ tableName: 'config_matrix', freezeTableName: true, timestamps: false })
export default class ConfigMatrix extends Model<ConfigMatrix> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @Column({ type: DataType.STRING })
  type: string;

  @Column({ type: DataType.STRING })
  initial: string;

  @Column({ type: DataType.STRING })
  prefix: string;

  @Column({ type: DataType.STRING })
  suffix: string;

  @Column({ type: DataType.STRING })
  ordination: string;
}
