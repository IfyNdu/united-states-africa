import {
  Column,
  CreatedAt,
  DataType,
  DefaultScope,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import Video from './video';


@DefaultScope(() => ({
  attributes: ['id', 'description', 'thumbnail']
}))
@Table({ tableName: 'video_category' })
export default class VideoCategory extends Model<VideoCategory> {

  @PrimaryKey
  @Column
  id!: string;

  @HasMany(() => Video)
  video: Array<Video>;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.TEXT)
  thumbnail?: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}