import {
  Column,
  CreatedAt,
  DataType,
  DefaultScope,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';


@DefaultScope(() => ({
  attributes: ['id', 'banner_title', 'banner_body']
}))
@Table({ tableName: 'app_static' })
export default class AppStatic extends Model<AppStatic> {

  @PrimaryKey
  @Column
  id!: string;

  @Column(DataType.TEXT)
  banner_title!: string;

  @Column(DataType.TEXT)
  banner_body!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}