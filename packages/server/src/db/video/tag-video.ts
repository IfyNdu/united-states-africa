import fp from 'lodash/fp';
import { TaggedVideo, TaggedVideoResponse } from 'usa-types';
import VideoTag from '../models/video-tag';
import * as Utils from '../utils';


const parse = (videos: Array<TaggedVideo>) => {

  return fp.map(Utils.toCamelCase, videos)
}

export default async (body: Array<TaggedVideo>): Promise<Array<TaggedVideoResponse>> => {

  const res = await VideoTag.bulkCreate(body);
  return parse(res)
}
