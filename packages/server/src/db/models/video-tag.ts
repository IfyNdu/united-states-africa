import {
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import Tag from './tag';
import Video from './video';


@Table({ tableName: 'video_tag' })
export default class VideoTag extends Model<VideoTag> {

  @PrimaryKey
  @Column
  id!: string;

  @ForeignKey(() => Video)
  @PrimaryKey
  @Column
  video_id!: string;

  @ForeignKey(() => Tag)
  @PrimaryKey
  @Column
  tag_id!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}