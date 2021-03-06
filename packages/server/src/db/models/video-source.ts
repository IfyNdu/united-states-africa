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
  attributes: ['id', 'video', 'name']
}))
@Table({ tableName: 'video_source' })
export default class VideoSource extends Model<VideoSource> {

  @PrimaryKey
  @Column
  id!: string;

  @HasMany(() => Video)
  video: Array<Video>;

  @Column(DataType.TEXT)
  name?: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}