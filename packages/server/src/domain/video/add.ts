import fp from 'lodash/fp';
import {
  HttpStatusCode,
  LoggerInstance,
  Video,
  VideoRequest
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Utils from '../utils';
import * as Validators from './validators';


const parseRequest = (request: VideoRequest): Video => {

  return {
    ...Utils.toSnakeCase(request),
    id: uuidv1()
  }
}

export default async (body: Array<VideoRequest>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new video ${JSON.stringify(body)}` });

  if (!Validators.video(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);

  return await Db.video.add(req);
}