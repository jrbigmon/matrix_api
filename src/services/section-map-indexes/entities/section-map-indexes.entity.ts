import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { SectionMap } from '../../section-maps/entities/section-maps.entity';

@Table({ tableName: 'section_map_indexes', freezeTableName: true })
export class SectionMapIndex extends Model<SectionMapIndex> {
  @Column({ primaryKey: true })
  id: string;

  @ForeignKey(() => SectionMap)
  @Column({ field: 'section_map_id' })
  sectionMapId: string;

  @Column
  name: string;

  @Column({ field: 'index_row' })
  indexRow: number;

  @Column({ field: 'index_column' })
  indexColumn: number;

  @Column({ field: 'index_level' })
  indexLevel: number;

  @Column
  status: string;
}
