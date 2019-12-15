import fp from 'lodash/fp';
import {
  HttpStatusCode,
  Logger,
  VideoCategory,
  VideoCategoryRequest
} from 'usa-types';
import { RequestError } from 'usa-utils'
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Validators from './validators';


const parseRequest = ({ description, imageUrl }: VideoCategoryRequest): VideoCategory => {

  return {
    description,
    id: uuidv1(),
    image_url: imageUrl
  }
}

export default async (body: Array<VideoCategoryRequest>, logger: Logger) => {

  logger.info({ message: `Adding new video category ${JSON.stringify(body)}` });

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