import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import SectionMap from '../../section-maps/entities/section-maps.entity';
import { ulid } from 'ulid';

@Table({
  tableName: 'section_map_indexes',
  freezeTableName: true,
  timestamps: false,
})
export default class SectionMapIndex extends Model<SectionMapIndex> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id = ulid();

  @ForeignKey(() => SectionMap)
  @Column({ field: 'section_map_id', type: DataType.STRING })
  sectionMapId: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ field: 'index_row', type: DataType.INTEGER })
  indexRow: number;

  @Column({ field: 'index_column', type: DataType.INTEGER })
  indexColumn: number;

  @Column({ field: 'index_level', type: DataType.INTEGER })
  indexLevel: number;

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
