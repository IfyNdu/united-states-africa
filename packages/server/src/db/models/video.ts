import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DefaultScope,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import VideoCategory from './video-category';
import VideoSource from './video-source';


@DefaultScope(() => ({
  attributes: [
    'id',
    'title',
    'source_id',
    'description',
    'duration',
    'definition',
    'thumbnail'
  ]
}))
@Table({ tableName: 'video' })
export default class Video extends Model<Video> {

  @PrimaryKey
  @Column
  id!: string;

  @ForeignKey(() => VideoCategory)
  @Column
  video_category_id!: string;

  @BelongsTo(() => VideoCategory)
  vc: VideoCategory;

  @ForeignKey(() => VideoSource)
  @Column
  video_source_id!: string;

  @BelongsTo(() => VideoSource)
  vs: VideoSource;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  source_id!: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.MEDIUMINT)
  duration?: number;

  @Column(DataType.TEXT)
  definition?: string;

  @Column(DataType.TEXT)
  thumbnail?: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}