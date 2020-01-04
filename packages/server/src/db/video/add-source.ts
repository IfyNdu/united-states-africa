import fp from 'lodash/fp';
import { VideoSource as Model } from 'usa-types';
import VideoSource from '../models/video-source';


const parse = (tags: Array<Model>) => {

  return fp.map(({ id, name }) => {

    return { id, name }
  }, tags)
}

export default async (body: Array<Model>): Promise<Array<Model>> => {

  const res = await VideoSource.bulkCreate(body);
  return parse(res)
}