import fp from 'lodash/fp';
import { VideoCategory as VidCategoryModel, VideoCategoryResponse } from 'usa-types';
import VideoCategory from '../models/video-category';


const parse = (categories: Array<VideoCategory>) => {

  return fp.map(({ description, id, image_url }) => {

    return { description, id, imageUrl: image_url }
  }, categories)
}

export default async (body: Array<VidCategoryModel>): Promise<Array<VideoCategoryResponse>> => {

  const res = await VideoCategory.bulkCreate(body);
  return parse(res)
}