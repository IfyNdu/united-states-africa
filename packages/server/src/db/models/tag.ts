import {
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';


@Table({ tableName: 'tag' })
export default class Tag extends Model<Tag> {

  @PrimaryKey
  @Column
  id!: string;

  @Column(DataType.TEXT)
  name!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}