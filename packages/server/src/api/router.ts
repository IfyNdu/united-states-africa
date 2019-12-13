import { Context } from 'usa-types';
import config from './config/config'
import videos from './videos/videos'


export default (ctx: Context) => {

  ctx.router.use('/config', config(ctx));
  ctx.router.use('/videos', videos(ctx));

  return ctx.router;
}