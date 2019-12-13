import {
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';


@Table@Table({ tableName: 'video_category' })
export default class VideoCategory extends Model<VideoCategory> {

  @PrimaryKey
  @Column
  id!: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.TEXT)
  image_url?: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}