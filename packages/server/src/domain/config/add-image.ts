import fp from 'lodash/fp';
import {
  AppImage,
  AppImageRequest,
  HttpStatusCode,
  LoggerInstance
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Validators from './validators';


const parseRequest = ({ bannerImageUrl }: AppImageRequest): AppImage => {

  return {
    banner_image_url: bannerImageUrl,
    id: uuidv1()
  }
}

export default async (body: Array<AppImageRequest>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new app images ${JSON.stringify(body)}` });

  if (!Validators.appImages(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);
  return await Db.config.addImage(req);
}