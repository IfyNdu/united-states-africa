import axios from 'axios';
import fp from 'lodash/fp';
import { LoggerInstance, YoutubeResponse } from 'usa-types';
import * as Utils from './utils';


export default (key: string, logger: LoggerInstance) => async (id: string, properties: { [key: string]: Array<string> }): Promise<YoutubeResponse> => {

    logger.info({ message: 'Requesting youtube video metadata', id })

    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
      params: { id, key, part: 'snippet, contentDetails' }
    });

    if (!fp.has('items', data) || fp.isEmpty(fp.get('items', data))) {

      const message = `Youtube unable to find video with id ${id}`;

      logger.error({ message });
      throw new Error(message);
    }

    return Utils.getProperties(data, properties);
};
