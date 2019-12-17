import fp from 'lodash/fp';
import { Video as VideoModel, VideoResponse } from 'usa-types';
import Video from '../models/video';
import * as Utils from '../utils';


const parse = (videos: Array<Video>): Array<VideoResponse> => {

  return fp.map(Utils.toCamelCase, videos)
}

export default async (body: Array<VideoModel>): Promise<Array<VideoResponse>> => {

  const res = await Video.bulkCreate(body);
  return parse(res)
}