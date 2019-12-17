import fp from 'lodash/fp';
import {
  HttpStatusCode,
  LoggerInstance,
  VideoTag
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Validators from './validators';


const parseRequest = (name: string): VideoTag => {

  return {
    id: uuidv1(),
    name
  }
}

export default async (body: Array<string>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new video tag ${JSON.stringify(body)}`});

  if (!Validators.videoTag(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);
  return await Db.video.addTag(req);
}