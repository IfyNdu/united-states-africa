import fp from 'lodash/fp';
import {
  HttpStatusCode,
  LoggerInstance,
  VideoSource
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Validators from './validators';


const parseRequest = (name: string): VideoSource => {

  return {
    id: uuidv1(),
    name
  }
}

export default async (body: Array<string>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new video source ${JSON.stringify(body)}`});

  if (!Validators.videoSource(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);
  return await Db.video.addSource(req);
}