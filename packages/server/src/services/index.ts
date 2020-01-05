import { LoggerInstance } from 'usa-types';
import youtube from './youtube';


interface Prop {
  youtubeKey: string
}

export default {

  init: ({ youtubeKey }: Prop, logger: LoggerInstance) => {

    return {
      youtube: youtube(youtubeKey, logger)
    };
  }
};
