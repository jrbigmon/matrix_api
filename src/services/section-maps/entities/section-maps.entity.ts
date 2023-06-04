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
import ConfigMatrix from '../../config-matrix/entities/config-matrix.entity';
import { ulid } from 'ulid';

@Table({ tableName: 'section_maps ', freezeTableName: true })
export default class SectionMap extends Model<SectionMap> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.INTEGER })
  columns: number;

  @Column({ type: DataType.INTEGER })
  rows: number;

  @Column({ type: DataType.INTEGER })
  levels: number;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_column_id', type: DataType.STRING })
  configColumnId: string;

  @BelongsTo(() => ConfigMatrix, 'configColumnId')
  configColumn: ConfigMatrix;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_row_id', type: DataType.STRING })
  configRowId: string;

  @BelongsTo(() => ConfigMatrix, 'configRowId')
  configRow: ConfigMatrix;

  @ForeignKey(() => ConfigMatrix)
  @Column({ field: 'config_level_id', type: DataType.STRING })
  configLevelId: string;

  @BelongsTo(() => ConfigMatrix, 'configLevelId')
  configLevel: ConfigMatrix;

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
