import { Context } from 'usa-types';
import config from './config/config'
import videos from './videos/videos'


export default (router: Context): Context => {

  router.use('/config', config(router));
  router.use('/videos', videos(router));

  return router;
}