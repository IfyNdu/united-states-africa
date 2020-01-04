import fp from 'lodash/fp';
import { AppImage as AppImageModel, AppImageResponse } from 'usa-types';
import AppImage from '../models/app-image';
import * as Utils from '../utils';


const parse = (tags: Array<AppImage>) => {

  return fp.map(Utils.toCamelCase, tags)
}

export default async (body: Array<AppImageModel>): Promise<Array<AppImageResponse>> => {

  const res = await AppImage.bulkCreate(body);
  return parse(res)
}