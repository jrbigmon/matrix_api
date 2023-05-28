import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ConfigMatrix } from '../../config-matrix/entities/config-matrix.entity';

@Table({ tableName: 'section_maps ', freezeTableName: true })
export class SectionMap extends Model<SectionMap> {
  @Column({ primaryKey: true })
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  columns: number;

  @Column
  rows: number;

  @Column
  levels: number;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_column_id' })
  configColumnId: string;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_row_id' })
  configRowId: string;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_level_id' })
  configLevelId: string;

  @Column
  status: string;
}
