import fp from 'lodash/fp';
import {
  AppStatics,
  AppStaticsRequest,
  HttpStatusCode,
  LoggerInstance
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Utils from '../utils';
import * as Validators from './validators';


const parseRequest = (request: AppStaticsRequest): AppStatics => {

  return {
    ...Utils.toSnakeCase(request),
    id: uuidv1()
  }
}

export default async (body: Array<AppStaticsRequest>, logger: LoggerInstance) => {

  logger.info({ message: `Adding new app statics ${JSON.stringify(body)}`});

  if (!Validators.appStatics(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const req = fp.map(parseRequest, body);
  return await Db.config.addStatics(req);
}