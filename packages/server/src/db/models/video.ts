import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import VideoCategory from './video-category';


@Table@Table({ tableName: 'video' })
export default class Video extends Model<Video> {

  @PrimaryKey
  @Column
  id!: string;

  @ForeignKey(() => VideoCategory)
  @Column
  video_category_id!: string;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.TEXT)
  image_url?: string;

  @Column(DataType.TEXT)
  video_link!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}