import fp from 'lodash/fp';
import { VideoTag as Model } from 'usa-types';
import Tag from '../models/tag';


const parse = data => {

  return Tag.upsert(data, { returning: true });
}

export default async (body: Array<Model>) => {

  await Promise.all(fp.map(parse, body));
}