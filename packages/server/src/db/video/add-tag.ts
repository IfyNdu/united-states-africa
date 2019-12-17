import fp from 'lodash/fp';
import { VideoTag as Model } from 'usa-types';
import Tag from '../models/tag';


const parse = (tags: Array<Model>) => {

  return fp.map(({ id, name }) => {

    return { id, name }
  }, tags)
}

export default async (body: Array<Model>): Promise<Array<Model>> => {

  const res = await Tag.bulkCreate(body);
  return parse(res)
}