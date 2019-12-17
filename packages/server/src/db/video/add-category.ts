import fp from 'lodash/fp';
import { VideoCategory as VideoCategoryModel, VideoCategoryResponse } from 'usa-types';
import VideoCategory from '../models/video-category';
import * as Utils from '../utils';


const parse = (categories: Array<VideoCategory>) => {

  return fp.map(Utils.toCamelCase, categories)
}

export default async (body: Array<VideoCategoryModel>): Promise<Array<VideoCategoryResponse>> => {

  const res = await VideoCategory.bulkCreate(body);
  return parse(res)
}