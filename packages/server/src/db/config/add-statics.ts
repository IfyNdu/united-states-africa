import fp from 'lodash/fp';
import { AppStatics, AppStaticsResponse } from 'usa-types';
import AppStatic from '../models/app-static';
import * as Utils from '../utils';


const parse = (tags: Array<AppStatic>) => {

  return fp.map(Utils.toCamelCase, tags)
}

export default async (body: Array<AppStatics>): Promise<Array<AppStaticsResponse>> => {

  const res = await AppStatic.bulkCreate(body);
  return parse(res)
}