import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'config_matrix', freezeTableName: true, timestamps: false })
export class ConfigMatrix extends Model<ConfigMatrix> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  type: string;

  @Column
  initial: string;

  @Column
  prefix: string;

  @Column
  suffix: string;

  @Column
  ordination: string;
}
