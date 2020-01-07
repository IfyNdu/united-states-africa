import fp from 'lodash/fp';
import {
  HttpStatusCode,
  LoggerInstance,
  Services,
  VideoRequest
} from 'usa-types';
import { RequestError } from 'usa-utils';
import uuidv1 from 'uuid/v1';
import Db from '../../db';
import * as Utils from '../utils';
import * as Validators from './validators';


const parseRequest = (({ id, tags }) => fp.map(tag_id => {

  return { tag_id, video_id: id }
}, tags))

const anyFp = fp as any

export default async (body: Array<VideoRequest>, { youtube }: Services, logger: LoggerInstance) => {

  logger.info({ message: 'Adding new videos', body });
  if (!Validators.video(body)) {

    const message = 'Incorrectly Formatted request';

    logger.error({ message, body });

    throw new RequestError({
      httpStatusCode: HttpStatusCode.BAD_REQUEST,
      itemError: body,
      message
    })
  }

  const dbVideoReq = [];

  for (const item of body) {

    const data = await youtube(item.sourceId, {
      contentDetails: ['duration', 'definition'],
      snippet: ['title', 'description', 'thumbnails.high.url', 'tags']
    });

    dbVideoReq.push({
      ...Utils.toSnakeCase(item),
      ...data,
      id: uuidv1()
    });
  }

  logger.info({ message: 'Populating Videos db', videoRequest: dbVideoReq });
  const videos = await Db.video.add(anyFp.map(fp.omit(['tags']), dbVideoReq));

  const tags = fp.flatten(fp.map(({ tags }) => fp.map(tag => ({ id: tag }), tags), dbVideoReq))

  logger.info({ message: 'Populating Tags db', tags });
  await Db.video.addTag(tags);

  const taggedVideos = fp.flatten(fp.map(parseRequest, dbVideoReq))

  logger.info({ message: 'Tagging video', taggedVideos });
  await Db.video.tagVideo(taggedVideos);

  return videos;
}