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
  attributes: ['id', 'banner_image_url']
}))
@Table({ tableName: 'app_image' })
export default class AppImage extends Model<AppImage> {

  @PrimaryKey
  @Column
  id!: string;

  @Column(DataType.TEXT)
  banner_image_url?: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}