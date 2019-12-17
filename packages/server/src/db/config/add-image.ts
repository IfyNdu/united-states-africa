import fp from 'lodash/fp';
import { AppImage as Model, AppImageResponse } from 'usa-types';
import AppImage from '../models/app-image';


const parse = (tags: Array<Model>) => {

  return fp.map(({ banner_image_url, id }) => {

    return { bannerImageUrl: banner_image_url, id }
  }, tags)
}

export default async (body: Array<Model>): Promise<Array<AppImageResponse>> => {

  const res = await AppImage.bulkCreate(body);
  return parse(res)
}