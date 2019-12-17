import { Context } from 'usa-types';


export default (router: Context): Context => {

  router.get('/', async (__, res) => {

    const data = await router.ctx.config.getBootstrap();
    res.send({ data });
  });

  router.post('/image', async (req, res) => {

    const data = await router.ctx.config.addImage(req.body);
    res.send({ data });
  });

  router.post('/static', async (req, res) => {

    const data = await router.ctx.config.addStatics(req.body);
    res.send({ data });
  });

  return router;
}
