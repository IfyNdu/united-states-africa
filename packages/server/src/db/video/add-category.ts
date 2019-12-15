import fp from 'lodash/fp';
import { VideoCategory as VidCategoryModel, VideoCategoryResponse } from 'usa-types';
import VideoCategory from '../models/video-category';


const parse = ({ description, id, image_url }: VidCategoryModel): VideoCategoryResponse => {

  return { description, id, imageUrl: image_url }
}

export default async (body: Array<VidCategoryModel>) => {

  const res = await VideoCategory.bulkCreate(body);
  return fp.map(parse, res)
}