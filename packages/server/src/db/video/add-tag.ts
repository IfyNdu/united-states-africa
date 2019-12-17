import fp from 'lodash/fp';
import { VideoTag } from 'usa-types';
import Tag from '../models/tag';


const parse = (tags: Array<VideoTag>) => {

  return fp.map(({ id, name }) => {

    return { id, name }
  }, tags)
}

export default async (body: Array<VideoTag>): Promise<Array<VideoTag>> => {

  const res = await Tag.bulkCreate(body);
  return parse(res)
}