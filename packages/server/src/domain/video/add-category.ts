import fp from 'lodash/fp';
import {
  HttpStatusCode,
  LoggerInstance,
  VideoCategory,
  VideoCategoryRequest
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Utils from '../utils';
import * as Validators from './validators';


const parseRequest = (request: VideoCategoryRequest): VideoCategory => {

  return {
    ...Utils.toSnakeCase(request),
    id: uuidv1()
  }
}

export default async (body: Array<VideoCategoryRequest>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new video category ${JSON.stringify(body)}`});

  if (!Validators.videoCategory(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);

  return await Db.video.addCategory(req);
}